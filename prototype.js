const cardForPartyMaker = {
    residencePlace: 'My House',
    conferencePlace: 'Sberbank',
    city: 'Yoshkar-Ola',

    registration() {
        const {
            city,
            conferencePlace,
            residencePlace,
            name,
            programmingLanguage
        } = this;
        return ({
            residencePlace,
            conferencePlace,
            city,
            name,
            favourite: `I like ${programmingLanguage}`
        })
    }
}

const theBestMember = Object.create(cardForPartyMaker, {
    name: { value: 'Nick Envy' },
    programmingLanguage: { value: 'Pascal' },
})

console.log(theBestMember.registration())