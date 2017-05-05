export class WebApi{    

    boardDetails: BoardDetails[];

    public sendEmail(to: string, message: string): void {
        alert("Sending " + message + " to " + to);
        // return new Promise(resolve=> resolve(true));
    }

    public getImageDetails(): Promise<BoardDetails[]> {  
        let promise = new Promise((resolve, reject) => {
            if(!this.boardDetails) {
                this.boardDetails = data;
                resolve(this.boardDetails);
            }
            else {
                resolve(this.boardDetails);
            }
        });

        return promise;


        // return new Promise((resolve, reject) => {
        //     this.boardDetails = data;
        //     resolve(this.boardDetails);
        // });
    }    
}

export class ImageDetails{
    imageUrl: string;
    thumb: string; // not used so far
}

export class Description{
    header: string;
    text: string;
    structureText: string;
    size: string;
    wheelBase: string;
    concave: string;
    kicks: string;
}

export class BoardDetails{
    images: ImageDetails[];
    description: Description;
}


let data:BoardDetails[] =
    [{
        description: { 
            header: "Freerider &quot;Haedge&quot;" , 
            text: "Mein erster gedroppter Freerider. Ein stabiles und beständiges Board zu produzieren, war entlang des gesamten Designprozesses ausschlaggebend. Dies wird nicht nur durch den Shape sondern auch durch den Print auf der Unterseite aufgegriffen, welcher den Hafenkran auf der Haedge Halbinsel zeigt. An diesem hängt eine Flagge, die Rostocks Wappentier, den Greif, abbildet. Das Symbol auf der Oberseite stellt eine der Verstrebungen des Krans dar, die ihm seine Stabilität verleihen. Aufgund seiner relativ kompaktem Maße ist das Board ein idealer Reisebegleiter.",
            structureText: "Dies ist das erste Deck welches im Vakkuumverfahren entstanden ist. Birke in Verbindung mit einem Pappelkern, verstärkt mit Glasfasern. Ahornfunier auf der Unterseite verleiht ein schönes Finish. Die mittelstarke Konkave bietet gute Kontrolle bei Turns.",
            size: "9'' x 37''",
            wheelBase:"?",
            concave:"?",
            kicks: ""
        },
        images: [
            {imageUrl:"", thumb:"images/2_3_320x480.jpg"},
            {imageUrl:"", thumb:"images/2_2_320x480.jpg"},
            {imageUrl:"", thumb:"images/2_1_717x480.jpg"},
            {imageUrl:"", thumb:"images/2_5_720x480.jpg"}
        ]
    },  {
        description: { 
            header: "Mini Cruiser &quot;Mone&quot;" , 
            text:"Dies ist ein modfiziertes Design meines ersten Mini Cruisers. Der neue Kicktail bietet bessere Kontrolle für noch engere Turns.",
            structureText: "Hergestellt mit einer einfachen Balkenpresse. Birke in Verbindung mit einem Pappelkern, verstärkt mit Glasfasern. Ahornfunier auf der Unterseite verleiht ein schönes Finish. Der Print auf der Unterseite zeigt Hibiscusblüten und einen Pfau, der Gripjob auf der Oberfläche stellt einen Gecko dar.",
            size: "8.2'' x 29.5''",
            wheelBase:"",
            concave:"",
            kicks: ""
        },
        images: [
            {imageUrl:"", thumb:"images/3_1_720x480.jpg"},
            {imageUrl:"", thumb:"images/3_2_320x480.jpg"},
            {imageUrl:"", thumb:"images/3_3_320x480.jpg"},           
            {imageUrl:"", thumb:"images/3_4_320x480.jpg"},          
            {imageUrl:"", thumb:"images/3_5_720x480.jpg"},        
            {imageUrl:"", thumb:"images/3_6_720x480.jpg"},        
        ]
    }
    
];


// {
//     en:{
//         description: { 
//             header: "Freerider &quot;Haedge&quot;" , 
//             text: "My first dropped freerider. Producing a solid and stable deck was the target during the entire design process. That also constitutes the bottom print which represents the harbour crane on &quot;Haedge Halbinsel&quot; with a flag of Rostock&#39;s heraldic animal, the griffin. The symbol on top reflects one of the braces that provide the crane its solidity. Due to its medium size, it is a great travel companion.",
//             structureText: "Combination of Baltic birch with a poplar core enforced with glas fibre. One sheet of maple veneer at the bottom produces a nice finish. The moderately deep concave provides good control in turns.",
//             size: "9'' x 37''",
//             wheelBase:"?",
//             concave:"?",
//             kicks: ""
//         },
//         images: [
//             {imageUrl:"", thumb:"images/2_3_320x480.jpg"},
//             {imageUrl:"", thumb:"images/2_2_320x480.jpg"},
//             {imageUrl:"", thumb:"images/2_1_717x480.jpg"},
//             {imageUrl:"", thumb:"images/2_5_720x480.jpg"}
//         ]
//     },  {
//         description: { 
//             header: "Mini Cruiser &quot;Mone&quot;" , 
//             text:"This is a modified design of my first mini cruiser. This one has a kick tail to increase ease of turns.",
//             structureText: "Combination of Baltic birch with a poplar core enforced with glas fibre. One sheet of maple veneer at the bottom produces a nice finish. The bottom print represents hibiscus blossoms and a peacock. On the top a grip job with a gecko.",
//             size: "8.2'' x 29.5''",
//             wheelBase:"",
//             concave:"",
//             kicks: ""
//         },
//         images: [
//             {imageUrl:"", thumb:"images/3_1_720x480.jpg"},
//             {imageUrl:"", thumb:"images/3_2_320x480.jpg"},
//             {imageUrl:"", thumb:"images/3_3_320x480.jpg"},           
//             {imageUrl:"", thumb:"images/3_4_320x480.jpg"},          
//             {imageUrl:"", thumb:"images/3_5_720x480.jpg"},        
//             {imageUrl:"", thumb:"images/3_6_720x480.jpg"},        
//         ]
//     }
// }