const utils = {
    averageCampaignBudget: (campaignList) => {

        if (!campaignList) {
            return 0
        }
    
        let total = 0
        for (const campaign of campaignList) {
          total += campaign.budget
        }
        
        return total / campaignList.length
    }
}

module.exports = utils