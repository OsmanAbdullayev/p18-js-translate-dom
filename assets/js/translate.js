const langBtn = document.querySelector(".langu");

const allLinks = document.querySelectorAll("a");
const allLinksArray = Array.from(allLinks);

const allP = document.querySelectorAll("p");
const allPArray = Array.from(allP);

const allButtons = document.querySelectorAll("button");
const allButtonsArray = Array.from(allButtons);

const allH6 = document.querySelectorAll("h6");
const allH6Array = Array.from(allH6);

const allH1 = document.querySelectorAll("h1");
const allH1Array = Array.from(allH1);

const allH5 = document.querySelector("h5");
const allH5Array = Array.from(allH5);

// const all = document.querySelectorAll('');
// const allArray = Array.from(all);

// for (let one of all) {
//     console.log(one.innerHTML)
// }

let engLinks = ["<strong class='text-primary'>Creative </strong><span class='text-dark'>Design</span>", "Home ", "About", "Features", "Testimonial", "Contact", "Components", "Read More", "<i><i/>", "<strong class='text-primary'>Creative </strong><span class='text-dark'>Design</span>", "Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6", "Link 7", "Link 8"];
let azLinks = ["<strong class='text-primary'>Kreativ </strong><span class='text-dark'>Dizayn</span>", "Ana səhifə", "Haqqımızda", "Xüsusiyyətlər", "Rəylər", "Əlaqə", "Komponentlər", "Əlavə Məlumat...", "<i><i/>", "<strong class='text-primary'>Kreativ </strong><span class='text-dark'>Dizayn</span>", "Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6", "Link 7", "Link 8"];
let engP = ["Lorem ipsum dolor sit amet.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda soluta nisi cumque nostrum porro repellat iusto neque quos asperiores, aliquam. ", "<b>Adipisicing elit. Modi similique iusto voluptatibus sint.</b>", " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio dignissimos modi molestias voluptas possimus perferendis saepe soluta accusantium, obcaecati neque quas ducimus, alias labore nesciunt atque ab voluptatibus quis! Molestiae dicta reprehenderit, quod laborum voluptatem laboriosam! Sapiente vel, fugiat voluptates.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quis! ", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda soluta nisi cumque nostrum porro repellat iusto neque quos asperiores, aliquam.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, quis!", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, amet!", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae autem rem impedit molestiae hic ducimus, consequuntur ullam dolorem quaerat beatae labore explicabo, sint laboriosam aperiam nihil inventore facilis. Quasi, facilis.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, amet!", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates voluptatem eum nisi cumque veniam est id reprehenderit atque rerum, cum sit perspiciatis, harum cupiditate nostrum quibusdam perferendis accusamus, illo.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates voluptatem eum nisi cumque veniam est id reprehenderit atque rerum, cum sit perspiciatis, harum cupiditate nostrum quibusdam perferendis accusamus, illo.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium voluptates voluptatem eum nisi cumque veniam est id reprehenderit atque rerum, cum sit perspiciatis, harum cupiditate nostrum quibusdam perferendis accusamus, illo.", "If you have some Questions or need Help! Please Contact Us! We make Cool and Clean Design for your Business", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis fugit maxime deleniti minus optio accusamus, quam maiores explicabo sunt.", "Contact us and we'll get back to you within 24 hours.", "12345 Fake ST NoWhere AB Country", "info@website.com", "Copyright 20222022 "];
let azP = ["Bu sayt azərbaycan dilinə tərcümə olunub.", "Burda nəsə Azərbaycan diilində yazılmalıdır ona görə ağlıma gələni yazıram.", "<b>Burda da çox maraqlı məlumat yazılıb.", "Qurtmarır ki bu Lorem İpsum. Bezdim.", "Yenə nəsə tərcümə olunub.", "Acmışam, babat kəbab gedərdi indi.", "Ya da ki, kababdansa dönər yaxşıdır.", "Nəsə uzun bir şey yazılıb burda. Yəgin ki, yeməkdəndir nəsə.", "Buranı da boş verək.", "Uzun sözün qısası...", "Biri var idi, biri yox idi...", "Burda sizin reklamınız ola bilərdi.", "Bu say satılır milyon dollara.", "Yay çox tez keçdi.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Burda Azərbaycan dilinə nəsə tərcümə olunub.", "Əlavə Məlumat", "Əlavə Məlumat", "Əlavə Məlumat", "Əlavə Məlumat", "Əlavə Məlumat", "Əlavə Məlumat", "Əlavə Məlumat"];

let engButtons = ["<span class='navbar-toggler-icon'></span>", "AZ", "Download Now", "Learn More", "Learn More", "Learn More"];
let azButtons = ["<span class='navbar-toggler-icon'></span>", "EN", "İndi Yüklə", "Əlavə Məlumat", "Əlavə Məlumat", "Əlavə Məlumat"];

let engH6 = ["Creative Design", "Lorem ipsum dolor sit amet, consectetur.", "Lorem ipsum dolor sit amet, consectetur.", "Lorem ipsum dolor sit amet, consectetur.", "Adell Smith", "John Doe", "Kyle Butler", "ABOUT US", "USEFUL LINKS", "CONTACT INFO"];
let azH6 = ["Kreativ Dizayn", "Lorem Ipsim nə bilim nə. Boş boş sözlər", "Lorem Ipsim nə bilim nə. Boş boş sözlər", "Lorem Ipsim nə bilim nə. Boş boş sözlər", "Osman Abdullayev", "Orxan Agayev", "Samir Eliyev", "Bizim haqqımızda", "Faydalı keçidlər", "Əlaqə"];
// let engH1 = ["About Us", "LETS TALK BUSINESS", "CONTACT US"];
// let azH1 = ["MƏLUMAT", "GƏLİN BİZNESİ MÜZAKİRƏ EDƏK", "ƏLAQƏ"];
// let engH5 = ["Lorem ipsum dolor sit"];
// let azH5 = ["Salam, necəsiz?"];



const multiLang = () => {
    if (langBtn.innerHTML == 'AZ') {
        for (let i=0; i < azLinks.length; i++) {
            allLinks[i].innerHTML = azLinks[i];
            allP[i].innerHTML = azP[i];
            allButtons[i].innerHTML = azButtons[i];
            allH6[i].innerHTML = azH6[i];
            // allH5.innerHTML = azH5;
            // for (let k=0; k < azH1.length; k++) {
            //     allH1[k].innerHTML = azH1[k];
            // }
        }
        langBtn.innerHTML = 'EN';
    } else {
        for (let i=0; i < azLinks.length; i++) {
            allLinks[i].innerHTML = engLinks[i];
            allP[i].innerHTML = engP[i];
            allButtons[i].innerHTML = engButtons[i];
            allH6[i].innerHTML = engH6[i];
            // allH5.innerHTML = engH5;
                // for (let k=0; k < azH1.length; k++) {
                //     allH1[k].innerHTML = engH1[k];
                // }
        }
        langBtn.innerHTML = 'AZ';
    }
}



langBtn.onclick = multiLang;