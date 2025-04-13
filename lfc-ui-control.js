const caseCustomers = ["Microsoft","Mastercard","McDonalds","Grupo Bimbo",
    "Tottus","Air India","Microsoft","L'Oréal",
    "Microsoft","Mastercard","IKEA","Nespresso"];
const caseNames = ["The Everyday Tactician","Room for Everyone","After Dinner Dinner","The Greatest Guide",
    "The Gift Card of Life","Safety Mudras","AdLaM","The Non-Issue",
    "Changing The Game","True Name","Thisables","Comin Home"];
const caseImageSrcs = ["resource/case01-00.jpg","resource/case01-01.jpg","resource/case01-02.jpg","resource/case01-03.jpg",
    "resource/case02-00.jpg","resource/case02-01.jpg","resource/case02-02.jpg","resource/case02-03.jpg",
    "resource/case03-00.jpg","resource/case03-01.jpg","resource/case03-02.jpg","resource/case03-03.jpg"];
const caseDetailDescriptors = ["The announcement made headlines everywhere and people from around the world applied. Nathan Owolabi, a dedicated “Football Manager” player, got the job. He used the data skills he honed while playing the game to help the club in the real world: developing formations, finding new strategies and uncovering the opposition’s weaknesses. The story of this unusual approach to football was told in a documentary series on TNT Sports, the U.K.’s biggest sports broadcaster.With the help of a data-savvy gamer, the club achieved the best season ever and was promoted to League Two for the first time in its 132-year history. Perhaps more important, Xbox saw a dramatic increase in gamers playing “Football Manager” on the console, and “Football Manager 24” became the most played edition in the history of the game franchise.",
        "In 2023, Mastercard debuted the celebrated “Where to Settle” campaign, which leveraged data to help Ukrainian refugees in Poland find the best cities to settle in based on their personal conditions. The campaign was recognized as one of the few campaigns advancing the United Nation’s Sustainable Development Goals at the Cannes Lions Festival of Creativity.",
        "Fine dining restaurants send patrons home not just with lighter wallets, but often, with grumbling stomachs, unsatisfied by the fancy yet meager portions. McDonald’s, however, is known for bringing great taste, satisfaction and smiles to consumers—even those coming out of high-end establishments. That’s why we launched “After Dinner Dinner”—to bring joy to those left wanting after the many luxury restaurants in the UAE failed them. The activation used geolocation to identify patrons in the vicinity of top-tier establishments and surprised them with push notifications urging them to go to their nearest McDonald’s on their way home. There, they could claim a free meal by presenting their expensive check from the upmarket eatery.",
        "From octopus to grasshopper, the creativity of Mexico’s street food is staggering. It’s also highly diverse, with each of these 8,402 stands selling unique and local recipes. The food isn’t generic – neither is our technological solution. ",
        "Breast cancer, detected in an early stage, has a survival rate of 93%. But in Peru, it´s the second cause of death among women. This is because the public health system is overrun and inefficient, with waiting periods of a year and a half for mammograms, while the private health system is excessively expensive and impossible to pay for most women.",
        "With McCann Worldgroup, Air India had undergone an identity rebranding showcasing its global ambitions and Indian roots. It had to ensure that this not only reflected in its brand livery and regalia, but also in consumer-facing communication. The best bet to achieve this? Their in-flight safety video.The new safety video had to represent the brand ethos of Air India, capture the attention of domestic and international passengers, and engage the millions of first-time flyers.",
        "The Fulani people of West Africa are the world’s largest nomadic group. Pulaar, their native tongue, existed without an alphabet for generations. They relied on spoken word to pass down traditions, codify their history, and conduct business. Without an alphabet, illiteracy thrives and written records, poems, songs and stories must be cobbled together using various foreign alphabets. Determined to preserve their people’s language, two brothers, Ibrahima and Abdoulaye Barry, created a handwritten alphabet for Pulaar— ADLaM.",
        "When you look at fashion and beauty media coverage, you notice an unwavering trend: Youth. While 40% of Women are over 50, only 15% are represented in the media. No wonder these women feel invisible. Age discrimination is a serious issue across all media industries. So, L'Oreal Paris created The NON – ISSUE: an 80-page print campaign in the form of an actual Vogue that makes age a Non-Issue. It's everything you'd expect from Vogue, and all the content was made by and dedicated to women over 50. All the models and contributors are over 50.",
        "When technology empowers each of us, it empowers all of us. This Super Bowl, follow the inspirational story of passionate young gamers rising to the top of their game with a little help from their friends, family and the Xbox Adaptive Controller. The story illustrates Microsoft's commitment to building accessible technology that levels the playing field and creates opportunity for all of us.",
        "For many transgender and nonbinary individuals, using their credit card is a pain point. They have been denied service and endured harassment when the name on their card misrepresents their true identity. With True Name, people can now have their chosen names proudly displayed on the front of their Mastercards. Already, two financial institutions have adopted True Name, setting a new industry standard of recognizing people for who they really are.",
        "Ikea is the first-ever major retailer to democratize the use of its furniture for people with disabilities. How did we do it? We hacked our most iconic and popular products with 13 open-source add-ons, freely available to download and 3D print — for anyone, anywhere, anytime.",
        "In this new campaign created by McCann New York, George Clooney sets off on an epic road-trip and drops into some of the most iconic movies of all time – from Psycho to Easy Rider to Seabiscuit – all to showcase just how far he’ll go for Nespresso. And his good pal Andy Garcia makes his Nespresso film debut as well. Garcia plays himself, relaxing poolside in Los Angeles and sipping a freshly-brewed coffee from his Nespresso Vertuo Plus machine. He’s talking on the phone with Clooney, who’s on location for a shoot in the pouring rain. As Garcia savors his Nespresso, Clooney is faced with a generic, sub-par coffee pot on-set. Envy sets in and George sets off on a journey through a real-life montage of Hollywood’s most famous travel scenes – all on a quest for quality coffee."];
const caseVideos = ["resource/case01-00-video.mp4","resource/case01-01-video.mp4","resource/case01-02-video.mp4","resource/case01-03-video.mp4",
                    "resource/case02-00-video.mp4","resource/case02-01-video.mp4","resource/case02-02-video.mp4","resource/case02-03-video.mp4",
                    "resource/case03-00-video.mp4","resource/case03-01-video.mp4","resource/case03-02-video.mp4","resource/case03-03-video.mp4"];

/******************************************************************************************************
<div class="image-hover-zoom">
    <div class="image-container">
        <img src="resource/case01-00.jpg" alt="Image 1">
        <div class="absolute bottom-4 left-2 text-white">
            <p class="text-2xl font-bold", id="first-row-images-1-text1">Microft</p>
            <p class="text-lg", id="first-row-images-1-text2">The Everyday Tactician</p>
        </div>
    </div>
</div>
******************************************************************************************************/

const caseElements = [];
function createCaseElement(imgIndex, imgSrc, text1, text2){
    const imageHoverZoom = document.createElement('div');
    const imageContainer = document.createElement('div');
    const imgElement = document.createElement('img');
    const divElement = document.createElement('div');
    const text1Element = document.createElement('p');
    const text2Element = document.createElement('p');

    imageHoverZoom.classList.add('image-hover-zoom');
    imageContainer.classList.add('image-container');
    divElement.classList.add('absolute','bottom-4', 'left-2', 'text-white');
    imgElement.src = imgSrc;
    imgElement.alt = `Image ${imgIndex + 1}`;
    text1Element.classList.add('text-2xl', 'font-bold');
    text1Element.innerHTML = text1;
    text2Element.classList.add('text-lg');
    text2Element.innerHTML = text2;

    divElement.appendChild(text1Element);
    divElement.appendChild(text2Element);

    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(divElement);

    imageHoverZoom.appendChild(imageContainer);
    return imageHoverZoom;
}

function createCaseElements(){
    for(let i=0; i<caseImageSrcs.length; i++){
        caseElements.push(createCaseElement(i, caseImageSrcs[i], caseCustomers[i], caseNames[i]));
    }
}

let curCaseIndex = -1;
const banner = document.querySelector('header.bg-blue-500');
const dropdownButton = document.getElementById('dropdownButton');
const dropdownMenu = document.getElementById('dropdownMenu');
let isMoreInfoExpanded = false;
const moreInfoIcon = document.getElementById('moreInfoIcon');
const firstRowImages = document.getElementById('first-row-images');
const detailSection = document.getElementById('detail-section');
const caseCustomer = document.getElementById('detail-section-text-customer');
const caseName = document.getElementById('detail-section-text-casename');
const caseDetail = document.getElementById('detail-section-text-caseDetail');
const caseVideo = document.getElementById('detail-section-video');
const nextButton = document.getElementById('detail-section-button-next');
const preButton = document.getElementById('detail-section-button-pre');
const closeButton = document.getElementById('detail-section-button-close');
const secondRowImages = document.getElementById('second-row-images');

function updateCaseElements() {
    const width = window.innerWidth;

    firstRowImages.innerHTML = '';
    secondRowImages.innerHTML = '';

    if (width >= 1280) {
        for (let i = 0; i < 4; i++) {
            firstRowImages.appendChild(caseElements[i]);
        }
        for (let i = 4; i < caseImageSrcs.length; i++) {
            secondRowImages.appendChild(caseElements[i]);
        }
    } else if (width >= 768 && width < 1280) {
        for (let i = 0; i < 3; i++) {
            firstRowImages.appendChild(caseElements[i]);
        }
        for (let i = 3; i < caseImageSrcs.length; i++) {
            secondRowImages.appendChild(caseElements[i]);
        }
    } else {
        firstRowImages.appendChild(caseElements[0]);
        for (let i = 1; i < caseImageSrcs.length; i++) {
            secondRowImages.appendChild(caseElements[i]);
        }
    }
}

function setFirstRowImagesMr() {
    firstRowImages.style.marginTop = `${banner.offsetHeight}px`;
}

function OnWindowLoad(){
    setFirstRowImagesMr();
}

function OnWindowResized(){
    console.log('OnWindowResized');
    updateCaseElements();
    setFirstRowImagesMr();
    const slide_shink_objs = document.querySelectorAll('.slide_shink_class.show');
    slide_shink_objs.forEach(function(slide_shink_obj) {
        // 强制重排以获取正确的高度
        void slide_shink_obj.offsetHeight;
        // 获取实际高度
        const actualHeight = slide_shink_obj.scrollHeight;
        // 设置实际高度
        slide_shink_obj.style.maxHeight = actualHeight + 'px';
        console.log(`OnWindowResized slide_shink_obj.style.maxHeight=${slide_shink_obj.style.maxHeight}`);
    });
}

createCaseElements();
updateCaseElements();
const allImageDivs = document.querySelectorAll('.image-hover-zoom');
// 页面加载时设置初始边距
window.addEventListener('load', OnWindowLoad);
// 窗口大小改变时重新设置边距
window.addEventListener('resize', OnWindowResized);

function SlideDown(){
    detailSection.classList.add('show');
    void detailSection.offsetHeight;
    const actualHeight = detailSection.scrollHeight;
    detailSection.style.maxHeight = actualHeight + 'px';
    const onVideoLoadedMetadata = () => {
        void detailSection.offsetHeight;
        const actualHeight = detailSection.scrollHeight;
        detailSection.style.maxHeight = actualHeight + 'px';
        caseVideo.removeEventListener('loadedmetadata', onVideoLoadedMetadata);
    };

    caseVideo.addEventListener('loadedmetadata', onVideoLoadedMetadata);
}

function ShinkUp(){
    detailSection.style.maxHeight = '0';
    detailSection.classList.remove('show');
    const onTransitionEnd = () => {
        closeDetailSection();
        detailSection.removeEventListener('transitionend', onTransitionEnd);
    };
    detailSection.addEventListener('transitionend', onTransitionEnd);
}

function ScrollToFirstRowImagesBottom(){
    const bannerHeight = banner.offsetHeight;
    //console.log(`banner.offsetHeight: ${banner.offsetHeight}, firstRowImages.offsetTop: ${firstRowImages.offsetTop}, firstRowImages.offsetHeight: ${firstRowImages.offsetHeight}`);
    window.scrollTo({
        top: firstRowImages.offsetTop + firstRowImages.offsetHeight - bannerHeight,
        behavior: 'smooth'
    });
}

function isDetailSectionOpened(){
    return -1<curCaseIndex && curCaseIndex<caseCustomers.length;
}

function isSameCase(index){
    return curCaseIndex==index;
}

function fillDetailSection(index){
    caseCustomer.textContent = `${caseCustomers[index]}`;
    caseName.textContent = `${caseNames[index]}`;
    caseDetail.textContent = `${caseDetailDescriptors[index]}`;
    if(caseVideo.src!==`${caseVideos[index]}`){
        caseVideo.src = `${caseVideos[index]}`;
        caseVideo.load();
        caseVideo.play();
    }
}

function resetDetailSection(){
    caseCustomer.textContent = "";
    caseName.textContent = "";
    caseDetail.textContent = "";
    caseVideo.pause();
}

function openDetailSection(index){
    if(index==curCaseIndex){
        return false;
    }

    fillDetailSection(index);
    curCaseIndex = index;
    return true;
}

function closeDetailSection(){
    resetDetailSection();
    curCaseIndex = -1;
}

function openNextDetailSection(){
    let nextIndex = curCaseIndex + 1;
    console.log(`curCaseIndex:${curCaseIndex}, nextIndex:${nextIndex}`);
    if(nextIndex>=caseVideos.length){
        nextIndex = 0;
    }
    return openDetailSection(nextIndex);
}

function openPreDetailSection(){
    let preIndex = curCaseIndex - 1;
    if(preIndex<0){
        preIndex = caseVideos.length - 1;
    }
    return openDetailSection(preIndex);
}

allImageDivs.forEach((div, index) => {
        div.addEventListener('click', () => {
        const isOpened = openDetailSection(index);
        if(isOpened){
            SlideDown();
            ScrollToFirstRowImagesBottom();
        }
    });
});

closeButton.addEventListener('click', () => {
    ShinkUp();
    ScrollToFirstRowImagesBottom();
});

nextButton.addEventListener('click', ()=>{
    console.log("nextButton.addEventListener");
    const isOpened = openNextDetailSection();
    if(isOpened){
        SlideDown();
        ScrollToFirstRowImagesBottom();
    }
});
preButton.addEventListener('click', ()=>{
    console.log("preButton.addEventListener");
    const isOpened = openPreDetailSection();
    if(isOpened){
        SlideDown();
        ScrollToFirstRowImagesBottom();
    }
});

function toggleMoreInfo() {
    if (isMoreInfoExpanded) {
        moreInfoIcon.classList.remove('rotate-icon');
        moreInfoIcon.classList.add('reverse-rotate-icon');
    } else {
        moreInfoIcon.classList.remove('reverse-rotate-icon');
        moreInfoIcon.classList.add('rotate-icon');
    }
    isMoreInfoExpanded =!isMoreInfoExpanded;
}

function toggleMoreInfoClose() {
    if (isMoreInfoExpanded) {
        moreInfoIcon.classList.remove('rotate-icon');
        moreInfoIcon.classList.add('reverse-rotate-icon');
        isMoreInfoExpanded =!isMoreInfoExpanded;
    }
}

dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
    toggleMoreInfo();
});

document.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target) && !dropdownMenu.contains(event.target)) {
        dropdownMenu.classList.remove('show');
        toggleMoreInfoClose();
    }
});
