


let selector = document.querySelector("#city")

selector.addEventListener("change",(e)=>{
        e.preventDefault()
        localStorage.setItem("Option", selector.selectedIndex);
        localStorage.setItem("Karaçi","https://lh3.googleusercontent.com/proxy/C3_25J2rElQtSMmk22Q2k5D3ewyhBxjxnoGEtUi8YJMMmX1M6LABvhFV6Oc2TDIz3DwtvKhyiF3gc29YkuopH5CrEsk9uLpFaMN-wdRXMA")
        localStorage.setItem("Islamabat ","https://www.gezilecekyerler.biz/wp-content/uploads/2016/01/%C4%B0slamabad-Nerede.jpg")
        localStorage.setItem("Lahor","https://gezimanya.com/sites/default/files/styles/800x600_/public/lokasyon-detay/2019-11/image-Think-Pakistan-Lahore-WazirKhanMosque-539346285-gaborbasch-copy.jpg")

        
        localStorage.setItem("Multan","https://www.parhlo.com/wp-content/uploads/2019/04/BeFunky-Collage-mu.jpg.webp")
        localStorage.setItem("Kasur","https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/03/30/807516-baba-bulleh-shah-darbar-khalid-mahmood.jpg")
        localStorage.setItem("Haydarabat","https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2021/03/Cover-1440x625-8.jpg")

        window.location.href = "file:///D:/system/Desktop/GuideCity/Task/index.html";
})

