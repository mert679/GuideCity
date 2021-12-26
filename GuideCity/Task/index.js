let image = document.querySelector("#img");
let article = document.querySelector(".article")

var sb = localStorage.getItem("Option")
if (sb == 0) {
    image.src =localStorage.getItem("Karaçi")
    article.innerHTML="Karachi is the capital of the province of Sindh, and the largest city in Pakistan. Located on the coast of the Arabian Sea, north-west of the Indus River Delta, the mega city is the largest city, original capital and cultural, economical, philanthropic, educational, and political hub, as well as the largest port, of the country"
}
if (sb == 1) {
    image.src =localStorage.getItem("Islamabat")
    article.innerHTML="Islamabad is the capital of the Islamic Republic of Pakistan" +
    "The city was built to be the pride of 1960 s Karachi. There are several reasons why the city was built: Karachi was right and right in terms of the presidency, and Eyub Khan in this way was to distribute it so evenly. At the same time, a war with India Karachi was weak against the future from the sea. Islamabad, on the other hand, was in a high position to be convinced of its disintegration. Also, the climate is better in Islamabad than in Karachi."
    "Islamabad is a much cleaner and modern city compared to other cities in Pakistan. The city is a place of many, separating from the group. There are eight districts in Islamabad: diplomatic zone, business zone, education zone, industrial zone, etc. Each has its own shopping shops and parks"
}
if (sb == 2) {
    image.src = localStorage.getItem("Lahor")
    article.innerHTML="It is the largest settlement in the western part of Pakistan and the center of the Punjab province and was established on the left bank of the Ravi, a tributary of the Indus river. Although some Hindu historians attribute the name of the city to Lava (Loh), son of the god-king Ramacandra, the actual origin of the name is unknown. Belâzurî, in 44 (664) Muâviye b. Mühelleb b. He mentions that Abu Sufre made an expedition to Bannah wa al-Ahwar (the Arabic form of Lahore)."
}
if (sb == 3) {
    image.src = localStorage.getItem("Multan")
    article.innerHTML="It is located on the route of the Indian subcontinent to Central Asia, on a plain east of the Chinab river, one of the tributaries of the Indus river. The name Mültan is the modified form of the previously used Mulasthân. Its known history begins with Alexander of Macedonia, who invaded this place in 326 BC. The conquest of the city, which was dominated by the Hindu Rai dynasty after the 5th century, by the Muslims in 94 (712), the conqueror of Sind, Muhammed b. It was performed by Qasim es-Sakafi. When it was captured, there was a very rich Hindu temple, which the Arabs called the 'golden house'."
}
if (sb == 4) {
    image.src =localStorage.getItem("Kasur")
    article.innerHTML="The district of Kasur was established in 1976. It has three Tehsils i.e Kasur, Chunian,  and Pattoki. Located between two rivers Ravi and Sutlej, it is commonly known as Majha. Kasur is bounded by India in the east, by District Okara on south, by District Sheikhupura on north-west and by District Lahore on its north."+

    "Kasur city was established by Kishwar, Kassu or Kishi son of Ram Chandra whereas his other brother Laho established Lahoopur or Lahore. In this way Lahore and Kasur are twin cities. It is also said that Kasur means city of Kasur i.e. city of palaces because there were to many places like forts which are still situated in old city of Kasur. It is further mentioned by the Pathans that they became along with the army of Mughal emperor Babar who gave then Jagir/Land in Kasur."+
    
    "Shrine of Baba Bhullay Shah, Baba Kamal Chishti and Khawja Daim-ul-Hazoori are also located in Kasur and a large number of pilgrims from the whole country and even from India paid visit to these shrines."+
    
    "In the war of 1965, 1971, citizens of Kasur played a very pivotal role and set an example of bravery. Due to efforts of present government, the district is going on toward developments and so many projects are in progress."
}
if (sb == 5) {
    image.src =localStorage.getItem("Haydarabat")
    article.innerHTML="Hyderabad is a city in Pakistan's Sind Province."+
    "Its population is about 1,578,400 people, making it the 6th largest city in Pakistan and the 2nd largest city in Sind province."+
    "The city was founded in 1768 by a local Muslim autonomous ruler named Mian Gulam Shah Kolhoro on the site of 'Nerun Kot' by the Indus River instead of an old Maurya fishing village. It was formerly the capital of Sind Province. Today, it is the capital of the Hyderabad district in the Sind Province of Pakistan."+
    "This city was annexed as part of the British East India Company Colony, after the British East India Company Colony's victory at the 'Battle of Amir Talpor' in 1843. Before the partition of the Indian Colony in 1948 and the establishment of Pakistan, while it was autonomous and under British Indian colony administration, the city's streets were regularly washed and cleaned with water drawn from the river."+
    "It was known as the 'Paris of India'. However, the city of Hyderabad was full of immigrants, as the Muslims in the areas that fell to India after the colony was divided into two, migrated to Pakistan and the state of Sind in huge numbers."
}

function openNav() {
    document.querySelector(".sidebar").style.width = "190px";
    document.querySelector("#wrapper").style.marginLeft = "190px";
    
}
function closeNav() {
    document.querySelector(".sidebar").style.width = "0";
    document.querySelector("#wrapper").style.marginLeft = "0px";
    
}