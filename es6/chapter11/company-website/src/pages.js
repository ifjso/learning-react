import { Link } from 'react-router-dom'
import { MainMenu } from './menus'
import './stylesheets/pages.scss'

const PageTemplate = ({children}) =>
    <div className="page">
        <MainMenu />
        {children}
    </div>

export const Home = () =>
    <section className="home">
        <h1>[홈페이지]</h1>
        <nav>
            <Link to="about">[회사 소개]</Link>
            <Link to="events">[이벤트]</Link>
            <Link to="products">[제품]</Link>
            <Link to="contact">[고객 지원]</Link>
        </nav>
    </section>

export const About = () =>
    <PageTemplate>
        <section className="about">
            <h1>[회사 소개]</h1>
        </section>
    </PageTemplate>    

export const Events = () =>
    <PageTemplate>
        <section className="events">
            <h1>[이벤트]</h1>
        </section>
    </PageTemplate>

export const Products = () =>
    <PageTemplate>
        <section className="products">
            <h1>[제품]</h1>
        </section>
    </PageTemplate>

export const Contact = () =>
    <PageTemplate>
        <section className="contact">
            <h1>[고객 지원]</h1>
        </section>
    </PageTemplate>

export const Whoops404 = ({location}) =>
    <div className="whoops-404">
        <h1>'{location.pathname}' 경로의 자원을 찾을 수 없습니다.</h1>
    </div>
