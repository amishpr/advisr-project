const fs = require('fs')
const dataPath = './data/business-list.json'
const utils = require('../utils/utils.js')

const routes = (app) => {

    app.get('/business/all', (req, res) => {
    
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if(err) {
                console.error(err)
            }
            try {
                let businessList = JSON.parse(data)

                for (let business of businessList) {
                    business.averageCampaignBudget = utils.averageCampaignBudget(business.campaigns)
                    business.numberOfCampaigns = business.campaigns.length
                }

                res.json(businessList)

            } catch(exception) {
                console.error(exception)
            }
        });
    })

    // Get one business by id
    app.get("/business/:id", async (req, res) => {

        const businessId = Number(req.params.id)

        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                console.error(err)
            }
            const businessList = JSON.parse(data)
            const business = businessList.find(i => i.id === businessId)

            business.averageCampaignBudget = utils.averageCampaignBudget(business.campaigns)
            business.numberOfCampaigns = business.campaigns.length
            
            res.json(business)
        });
    });
}

module.exports = routes