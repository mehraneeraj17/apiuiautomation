describe('Creating the loan request in the Support Queue', () => {

    //    beforeEach(() => {
    //     cy.request({method:'POST', url:'http://qa.rupeek.com/api/support/createsupportqueue',body: supportqueueloanrequest,failOnStatusCode: false})
    //    });

    var supportqueueloanrequest = {
        "phone": "9916651460",
        "category": "education",
        "requestedamount": 199999,
        "notes": "test fcm customer notification",
        "address": "B 2103,club meadows, Hiranandani, Hulimavu - B, Akshaya Gardens, Akshayanagar, Bengaluru 560076",
        "locality": "Hulimavu",
        "location": {
            "x": 12.8755655,
            "y": 77.6125612
        },
        "city": "bangalore",
        "istakeover": false,
        "isscheduled": true,
        "lpid": "5ac601e1f06f2ce544804433",
        "branchid": "5ac60256f06f2ce544804434",
        "schemeid": "3",
        "addressparts": {
            "floor": "B 2103",
            "house": "Club Medows"
        },
        "locationsource": "reaper",
        "cityid": 1,
        "tranxmode": "cash"
    }

    it('Validate the Forbidden Scenario', () => {
        cy.request({ method: 'POST', url: 'http://qa.rupeek.com/api/support/createsupportqueue', body: supportqueueloanrequest, failOnStatusCode: false })
            .then((response) => {
                expect(response.body).to.have.property('UserMsg', 'You do not have access to this resource')
                expect(response.body).to.have.property('status', 403)
            })
    });

});