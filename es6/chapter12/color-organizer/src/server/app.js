import express from 'express'
import path from 'path'
import fs from 'fs'
import { Provider } from 'react-redux'
import { compose } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import storeFactory from '../store'
import App from '../components/App'

const staticCSS = fs.readFileSync(path.join(__dirname, '../../dist/assets/main.css'))
const fileAssets = express.static(path.join(__dirname, '../../dist/assets'))

const serverStore = storeFactory()

serverStore.subscribe(() =>
    fs.writeFile(
        path.join(__dirname, '../../data/initialState.json'),
        JSON.stringify(serverStore.getState()),
        error => (error) ? console.log("상태 저장 오류!", error) : null
    )
)

const buildHTMLPage = ({html, state}) =>
    `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>유니버셜 색 관리 앱</title>
                <style>${staticCSS}</style>
            </head>
            <body>
                <div id="react-container">${html}</div>
                <script>
                    window.__INITIAL_STATE__ = ${JSON.stringify(state)}
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>
    `

const renderComponentsToHTML = ({url, store}) =>
    ({
        state: store.getState(),
        html: renderToString(
            <Provider store={store}>
                <StaticRouter url={url} context={{}}>
                    <App />
                </StaticRouter>
            </Provider>
        )
    })

const makeClientStoreFrom = store => url =>
    ({
        store: storeFactory(store.getState()),
        url
    })

const logger = (req, res, next) => {
    console.log(`'${req.url}'에 대한 ${req.method} 요청`)
    next()
}

const respond = (req, res) =>
    res.status(200).send(htmlResponse(req.url))

const htmlResponse = compose(
    buildHTMLPage,
    renderComponentsToHTML,
    makeClientStoreFrom(serverStore)
)

const addStoreToRequestPipeline = (req, res, next) => {
    req.store = serverStore
    next()
}

export default express()
    .use(logger)
    .use(fileAssets)
    .use(addStoreToRequestPipeline)
    .use(respond)
