// 📌📌 UNIVERSAL ASSETS

let outfit = document.getElementById('outfit')
let portrait = document.getElementById('portrait');

// 📌📌 doAnimation FUNCTION

let animationContainer = document.getElementById('animationContainer');

const doAnimation = () => {

    animationContainer.removeAttribute('class');
    portrait.setAttribute('class', 'hidden');

    setTimeout(() => {
        portrait.removeAttribute('class');
        animationContainer.setAttribute('class', 'slideInAnimation');
    }, 100);

}

document.addEventListener('DOMContentLoaded', () => {
    doAnimation();
});

// 📌📌📌🚨 | CLICK | changeOutfitBtn

let changeOutfitBtn = document.getElementById('changeOutfitBtn');
let changeOutfitBox = document.getElementById('changeOutfitBox');
let chooseOutfitBox = document.getElementById('chooseOutfitBox');

changeOutfitBtn.addEventListener('click', () => {

    // 📌📌 changeOutfit ASSETS

    const changeOutfitAssetList = [{
            id: 'sleep 01',
            outfit_url: 'assets/img/outfits/sleep_outfit.png',
            portrait_url: 'assets/img/portraits/sleep_01_portrait.png',
            text: 'Aaaaah, que sono!',
            button: '"Sul Sul!"'
        },
        {
            id: 'sleep 02',
            outfit_url: 'assets/img/outfits/sleep_outfit.png',
            portrait_url: 'assets/img/portraits/sleep_02_portrait.png',
            text: 'Ah, oi! Não tinha te visto aí!',
            button: 'próximo'
        },
        {
            id: 'sleep 03',
            outfit_url: 'assets/img/outfits/sleep_outfit.png',
            portrait_url: 'assets/img/portraits/sleep_03_portrait.png',
            text: 'Nossa, olha minha cara, meu cabelo, minha roupa...',
            button: 'próximo'
        },
        {
            id: 'sleep 04',
            outfit_url: 'assets/img/outfits/sleep_outfit.png',
            portrait_url: 'assets/img/portraits/sleep_04_portrait.png',
            text: 'Você me ajuda a escolher o que vestir?',
            button: '"Bora!"'
        },
        {
            id: 'everyday',
            outfit_url: 'assets/img/outfits/everyday_outfit.png',
            portrait_url: 'assets/img/portraits/everyday_portrait.png',
            text: 'Que tal esse look básico? Perfeito pro dia-a-dia!',
            button: 'próximo'
        },
        {
            id: 'formal',
            outfit_url: 'assets/img/outfits/formal_outfit.png',
            portrait_url: 'assets/img/portraits/formal_portrait.png',
            text: 'Ou esse mais formal, inspirado na Audrey Hepburn?',
            button: 'próximo'

        },
        {
            id: 'party',
            outfit_url: 'assets/img/outfits/party_outfit.png',
            portrait_url: 'assets/img/portraits/party_portrait.png',
            text: 'Esse aqui também é uma graça! Olha essas mangas!',
            button: 'próximo'

        },
        {
            id: 'swim',
            outfit_url: 'assets/img/outfits/swim_outfit.png',
            portrait_url: 'assets/img/portraits/swim_portrait.png',
            text: 'Posso também tentar moda praia...',
            button: 'próximo'

        },
        {
            id: 'athletic',
            outfit_url: 'assets/img/outfits/athletic_outfit.png',
            portrait_url: 'assets/img/portraits/athletic_portrait.png',
            text: '... ou fitness fashion!',
            button: 'próximo'

        }
    ];

    let changeOutfitBtnValue = Number(changeOutfitBtn.value);
    let changeOutfitBoxText = document.getElementById('changeOutfitBoxText');
    let changeOutfitBtnText = document.getElementById('changeOutfitBtnText');
    let changeOutfitBtnIcon = document.getElementById('changeOutfitBtnIcon');
    let changeOutfitAsset = changeOutfitAssetList[changeOutfitBtnValue];

    // 📌 play audio 

    let CASsoundtrack = document.getElementById('CASsoundtrack');
    CASsoundtrack.volume = 0.05;

    if (changeOutfitBtnValue === 4) {
        CASsoundtrack.play();
    }

    // 📌 update outfit/portrait IMG + changeOutfitBox TEXT

    if (changeOutfitBtnValue < changeOutfitAssetList.length) {

        changeOutfitBoxText.innerText = changeOutfitAsset['text'];
        outfit.src = changeOutfitAsset['outfit_url'];
        portrait.src = changeOutfitAsset['portrait_url'];

        // 📌 update changeOutfitBtn TEXT + ICON

        changeOutfitBtnText.innerText = changeOutfitAsset['button'];

        if (changeOutfitBtnText.innerText === 'próximo') {
            changeOutfitBtnIcon.src = 'assets/img/icons/btn_icons/next.png';
        } else {
            changeOutfitBtnIcon.src = 'assets/img/icons/btn_icons/talk.png';
        }

        // 📌 animate portrait (according to frame)

        if (changeOutfitBtnValue > 3) {
            doAnimation();
        }

        // 📌 update changeOutfitBtnValue

        changeOutfitBtnValue++;
        changeOutfitBtn.value = `${changeOutfitBtnValue}`;

        // 📌 update contentBox (chooseBtnValue) and images

    } else {
        changeOutfitBox.setAttribute('class', 'hidden');
        chooseOutfitBox.setAttribute('class', 'contentBox');
        outfit.src = 'assets/img/outfits/sleep_outfit.png';
        portrait.src = 'assets/img/portraits/sleep_02_portrait.png';
        doAnimation();
    }

});

// 📌📌📌🚨 | CLICK | chooseOutfitBtn

let chooseOutfitBtnList = document.getElementsByClassName('chooseOutfitBtn');
let chosenOutfit = '';

for (let outfitBtn of chooseOutfitBtnList) {

    outfitBtn.addEventListener('click', () => {

        switch (outfitBtn.id) {

            case 'chooseOutfitBtn_everyday':
                outfit.src = 'assets/img/outfits/everyday_outfit.png';
                portrait.src = 'assets/img/portraits/everyday_portrait.png';
                chosenOutfit = 'everyday';
                doAnimation();
                break;

            case 'chooseOutfitBtn_formal':
                outfit.src = 'assets/img/outfits/formal_outfit.png';
                portrait.src = 'assets/img/portraits/formal_portrait.png';
                chosenOutfit = 'formal';
                doAnimation();
                break;

            case 'chooseOutfitBtn_party':
                outfit.src = 'assets/img/outfits/party_outfit.png';
                portrait.src = 'assets/img/portraits/party_portrait.png';
                chosenOutfit = 'party';
                doAnimation();
                break;

            case 'chooseOutfitBtn_swim':
                outfit.src = 'assets/img/outfits/swim_outfit.png';
                portrait.src = 'assets/img/portraits/swim_portrait.png';
                chosenOutfit = 'swim';
                doAnimation();
                break;

            case 'chooseOutfitBtn_athletic':
                outfit.src = 'assets/img/outfits/athletic_outfit.png';
                portrait.src = 'assets/img/portraits/athletic_portrait.png';
                chosenOutfit = 'athletic';
                doAnimation();
                break;

            case 'chooseOutfitBtn_sleep':
                outfit.src = 'assets/img/outfits/sleep_outfit.png';
                portrait.src = 'assets/img/portraits/sleep_02_portrait.png';
                chosenOutfit = 'sleep';
                doAnimation();
                break;
        }
    });
}

// 📌📌📌🚨 | CLICK | confirmOutfitSelectionBtn

const confirmOutfitSelectionBtn = document.getElementById('confirmOutfitSelectionBtn');

confirmOutfitSelectionBtn.addEventListener('click', () => {


    if (chosenOutfit === '') {
        alert('no outfit selected');
    } else {

        let mainContainer = document.getElementById('mainContainer');
        let sideImgContainer = document.getElementById('sideImgContainer');
        let chosenOutfitBoxContainer = document.getElementById('chosenOutfitBoxContainer');
        let chosenOutfitBoxText = document.getElementById('chosenOutfitBoxText');

        let bg;
        let text;

        mainContainer.setAttribute('class', 'hidden');
        sideImgContainer.setAttribute('class', 'hidden');
        chosenOutfitBoxContainer.removeAttribute('class');

        switch (chosenOutfit) {
            case 'everyday':
                text = 'Partiu sinuca e Happy Hour!';
                bg = `url('assets/img/bg_imgs/outfits_bg/everyday_bg.png')`;
                break;
            case 'formal':
                text = 'Já posso aproveitar um jantar romântico...';
                bg = `url('assets/img/bg_imgs/outfits_bg/formal_bg.png')`;

                break;
            case 'party':
                text = 'Aí sim, vou beber todas!';
                bg = `url('assets/img/bg_imgs/outfits_bg/party_bg.png')`;
                break;
            case 'swim':
                text = 'Isso é que é vida!';
                bg = `url('assets/img/bg_imgs/outfits_bg/swim_bg.png')`;
                break;
            case 'athletic':
                text = 'Pensando no ex...';
                bg = `url('assets/img/bg_imgs/outfits_bg/athletic_bg.png')`;
                chosenOutfitBoxContainer.style.justifyContent = 'flex-start';
                break;
            case 'sleep':
                text = 'Tá certo, melhor voltar pra cama e fazer nada o dia inteiro...';
                bg = `url('assets/img/bg_imgs/outfits_bg/sleep_bg.png')`;
                break;
        }

        chosenOutfitBoxText.innerText = text;
        document.body.style.backgroundImage = bg;
    }
});