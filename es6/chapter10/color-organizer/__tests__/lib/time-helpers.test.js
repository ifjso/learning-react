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
        // it("5 minutes")
        // it("2 hours")
        // it("1 day")
        // it("5 days")
        // it("over a month")
        // it("years ago")
    })  
})