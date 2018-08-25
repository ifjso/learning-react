import { compose } from 'redux'
import { ago } from '../../src/lib/time-helpers'

const certify = compose(expect, ago)

describe("Time Helpers", () => {

    describe("ago", () => {
        it("less than a minute", () => {
            const now = "Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)"
            const timestamp = "Thu Mar 17 2016 18:42:50 GMT-0700 (PDT)"
            certify(timestamp, now).toEqual("less than a minute")
        })

        it("5 minutes", () => {
            const now = "Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)"
            const timestamp = "Thu Mar 17 2016 18:38:08 GMT-0700 (PDT)"
            certify(timestamp, now).toEqual("5 minutes ago")
        })

        it("2 hours", () => {
            const now = "Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)"
            const timestamp = "Thu Mar 17 2016 16:43:08 GMT-0700 (PDT)"
            certify(timestamp, now).toEqual("2 hours ago")
        })

        it("1 day", () => {
            const now = "Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)"
            const timestamp = "Thu Mar 16 2016 18:43:08 GMT-0700 (PDT)"
            certify(timestamp, now).toEqual("1 day ago")
        })

        it("5 days", () => {
            const now = "Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)"
            const timestamp = "Thu Mar 12 2016 18:43:08 GMT-0700 (PDT)"
            certify(timestamp, now).toEqual("5 days ago")
        })

        it("over a month", () => {
            const now = "Thu Mar 17 2016 18:43:08 GMT-0700 (PDT)"
            const timestamp = "Thu Feb 15 2016 18:43:08 GMT-0700 (PDT)"
            certify(timestamp, now).toEqual("2/16/2016")
        })

        it("years ago", () => {
            const timestamp = "Thu Feb 16 2016 18:43:08 GMT-0700 (PTD)"
            certify(timestamp).toBeDefined()
        })
    })  
})