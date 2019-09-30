const el = document.getElementById("goBtn");

el.addEventListener("click", (ev) => {
    const inp = document.getElementById("numInput");
    const one = document.getElementById("nat1");
    const two = document.getElementById("nat2");
    const thr = document.getElementById("nat3");
    const fou = document.getElementById("nat4");
    let parent = document.querySelector("#contents");
    
    if(document.querySelector("#contents table") != null) parent.removeChild(document.querySelector("#contents table"));

    //let victims = document.querySelectorAll("#contents ol li");
    //for(let x of victims) parent.removeChild(x);

    let nats = "";
    if(one.value != "") nats += one.value+",";
    if(two.value != "") nats += two.value+",";
    if(thr.value != "") nats += thr.value+",";
    if(fou.value != "") nats += fou.value;
    let link = "https://randomuser.me/api/?nat=" + nats +"&results=" + parseInt(inp.value);
    fetch(link)
    .then((danceparty) => danceparty.json())
    .then((d) => {
        let parent = document.querySelector("#contents");
        let table = document.createElement("table");
        table.border = 1;
        parent.append(table);

        let topRow =        document.createElement("tr");
        let name =          document.createElement("th");
        let phone =         document.createElement("th");
        phone.classList.add("colN");
        let birth =         document.createElement("th");
        birth.classList.add("colN");
        let picture =       document.createElement("th");
        picture.classList.add("colN");
        let nationality =   document.createElement("th");
        nationality.classList.add("colN");
        let nametx =        document.createTextNode("Name");
        let phonetx =       document.createTextNode("Cell Phone");
        let birthtx =       document.createTextNode("Date of Birth");
        let picturetx =     document.createTextNode("Picture");
        let nationalitytx = document.createTextNode("Nationality");
        name.append(nametx);
        phone.append(phonetx);
        birth.append(birthtx);
        picture.append(picturetx);
        nationality.append(nationalitytx);
        table.append(topRow);
        topRow.append(name);
        topRow.append(phone);
        topRow.append(birth);
        topRow.append(picture);
        topRow.append(nationality);

        for(i = 0; i < d.results.length; i++)
        {
            let row = document.createElement("tr");
            let namer = document.createElement("td");
            let phoner = document.createElement("td");
            phoner.classList.add("colN");
            let birthr = document.createElement("td");
            birthr.classList.add("colN");
            let pic = document.createElement("td");
            pic.classList.add("colN");
            let natpic = document.createElement("td");
            natpic.classList.add("colN");
            let picturer = document.createElement("img");
            let nationalityr = document.createElement("img");
            pic.append(picturer);
            natpic.append(nationalityr);

            namer.append(document.createTextNode(d.results[i].name.first + " " + d.results[i].name.last));
            phoner.append(document.createTextNode(d.results[i].phone));
            birthr.append(document.createTextNode(d.results[i].dob.date.slice(5,7) + "." + d.results[i].dob.date.slice(8,10) + "." + d.results[i].dob.date.slice(0,4)));
            picturer.setAttribute("src", d.results[i].picture.thumbnail);
            nationalityr.setAttribute("src", "https://www.countryflags.io/" + d.results[i].nat + "/shiny/64.png")

            table.append(row);
            row.append(namer);
            row.append(phoner);
            row.append(birthr);
            row.append(pic);
            row.append(natpic);
        }









        // for(i = 0; i < d.results.length; i++)
        // {
        //     let child = document.createElement("li");
        //     parent.append(child);
        //     let tex = document.createTextNode(d.results[i].name.first + " " + d.results[i].name.last);
        //     child.append(tex);
        // }
        console.log("Got some data", d);
    });
    
    
    // for(i = 0; i < parseInt(inp.value); i++)
    // {
    //     let child = document.createElement("li");
    //     parent.append(child);
    //     let tex = document.createTextNode("Item #" + (i + 1));
    //     child.append(tex);
    // }
});