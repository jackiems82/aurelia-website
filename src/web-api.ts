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
    largeImgUrl: string;
    smallImgUrl: string;
    thumb: string;
    // index used to load the correct image in the photoSwipe gallery. Set in view-model.
    photoSwipeIndex: number;
}

export class Description{
    en: Language;
    de: Language;
    size: string;
    wheelBase: string;
    concave: string;
    kicks: string;
}

export class Language{
    header: string;
    text: string;
    structureText: string;
}

export class BoardDetails{
    images: ImageDetails[];
    description: Description;
}


let data:BoardDetails[] =
    [{
        description: { 
            de:{
                header: "3 Boards" , 
                text:"3 Boards, ähnlich im Stil, unterschiedlich im Design, mit einzigartigen Statements. Dieses Mal durfte ich für Freunde nach ihren Wünschen und Vorstellungen Longboard Decks bauen. Dabei waren besonders Städte und Hobbies für das Design ausschlaggebend.",
                structureText: "Hergestellt im Vakuumverfahren, Birkenperrholz mit Pappelkern und Glasfasern. Ahornfunier bildet wieder den Abschluss. Eine Besonderheit ist das Cleargrip bei einem Deck wodurch die Oberseite besonders zur Geltung kommt.",
            
            },
            en:{
                header: "3 Boards" , 
                text:"3 Boards, similar in style, different in design, with unique statements. This time, I was allowed to build longboard decks for friends, according to their wishes and expectations. Particularly cities and hobbies were decisive for the prints.",
                structureText: "Made in a vacuum process, birch plywood with poplar core and glass fibers. A special feature is the clear grip on one deck, which showcases particularly the upper side.",
            },
            size: "",
            wheelBase:"",
            concave:"",
            kicks: ""
        },
        images: [
            {largeImgUrl:"images/4_1_size_1200x675.jpg", smallImgUrl: "images/4_1_size_711x400.jpg", thumb:"images/4_1_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_2_size_1422x400.jpg", smallImgUrl: "images/4_2_size_1422x400.jpg", thumb:"images/4_2_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_3_size_1200x675.jpg", smallImgUrl: "images/4_3_size_711x400.jpg", thumb:"images/4_3_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_4_size_675x1200.jpg", smallImgUrl: "images/4_4_size_400x711.jpg", thumb:"images/4_4_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_5_size_675x1200.jpg", smallImgUrl: "images/4_5_size_400x711.jpg", thumb:"images/4_5_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_6_size_801x1200.jpg", smallImgUrl: "images/4_6_size_400x599.jpg", thumb:"images/4_6_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_7_size_801x1200.jpg", smallImgUrl: "images/4_7_size_400x599.jpg", thumb:"images/4_7_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_8_size_1200x800.jpg", smallImgUrl: "images/4_8_size_600x400.jpg", thumb:"images/4_8_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_9_size_972x1200.jpg", smallImgUrl: "images/4_9_size_400x494.jpg", thumb:"images/4_9_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/4_10_size_959x1200.jpg", smallImgUrl: "images/4_10_size_400x501.jpg", thumb:"images/4_10_400.jpg", photoSwipeIndex: undefined },      
        ]
    },{
        description: { 
            de: {
                header: "Mini Cruiser &quot;Mone&quot;" , 
                text:"Dies ist ein modfiziertes Design meines ersten Mini Cruisers. Der neue Kicktail bietet bessere Kontrolle für noch engere Turns.",
                structureText: "Hergestellt mit einer einfachen Balkenpresse. Der Aufbau besteht aus Birkensperrholz in Verbindung mit einem Pappelkern, verstärkt mit Glasfasern. Ahornfunier auf der Unterseite verleiht ein schönes Finish. Der Print zeigt Hibiscusblüten und einen Pfau, der Gripjob auf der Oberseite stellt einen Gecko dar.",
            },
            en:{
                header: "Mini Cruiser &quot;Mone&quot;" , 
                text:"This is a modified design of my first Mini Cruiser. The new Kicktail provides better control for even tighter turns.",
                structureText: "Made with a simple bar press. The structure consists of birch plywood combined with a poplar core, reinforced with glass fibers. Maple veneer on the bottom gives a nice finish. The print shows hibiscus blossoms and a peacock, the gripjob on the top represents a gecko.",
            },
            size: "8.2'' x 29.5''",
            wheelBase:"",
            concave:"",
            kicks: ""
        },
        images: [
            {largeImgUrl:"images/3_1_size_1200x800.jpg", smallImgUrl: "images/3_1_size_600x400.jpg", thumb:"images/3_1_400.jpg", photoSwipeIndex: undefined },
            {largeImgUrl:"images/3_2_size_800x1200.jpg", smallImgUrl: "images/3_2_size_400x600.jpg", thumb:"images/3_2_400.jpg", photoSwipeIndex: undefined },
            {largeImgUrl:"images/3_3_size_800x1200.jpg", smallImgUrl: "images/3_3_size_400x600.jpg", thumb:"images/3_3_400.jpg", photoSwipeIndex: undefined },           
            {largeImgUrl:"images/3_4_size_800x1200.jpg", smallImgUrl: "images/3_4_size_400x600.jpg", thumb:"images/3_4_400.jpg", photoSwipeIndex: undefined },          
            {largeImgUrl:"images/3_5_size_1200x800.jpg", smallImgUrl: "images/3_5_size_600x400.jpg", thumb:"images/3_5_400.jpg", photoSwipeIndex: undefined },        
            {largeImgUrl:"images/3_6_size_1200x800.jpg", smallImgUrl: "images/3_6_size_600x400.jpg", thumb:"images/3_6_400.jpg", photoSwipeIndex: undefined },        
        ]
    }, {
        description: { 
            de: {
                header: "Freerider &quot;Haedge&quot;" , 
                text: "Ein stabiles und beständiges Board zu produzieren, war ausschlaggebend für das Design. Dies wird nicht nur durch den Shape sondern auch durch den Print auf der Unterseite aufgegriffen. Das Motiv zeigt den Hafenkran der Haedge Halbinsel und einer Flagge mit Rostocks Wappentier, dem Greif. Das Symbol auf der Oberseite stellt eine der Verstrebungen des Krans dar, die ihm seine Stabilität verleihen. Aufgrund seiner relativ kompakten Maße ist das Board ein idealer Reisebegleiter.",
                structureText: "Zum ersten Mal im Vakkuumverfahren entstanden besteht der Aufbau aus Birkensperrholz in Verbindung mit einem Pappelkern, verstärkt mit Glasfasern. Ahornfunier auf der Unterseite verleiht ein schönes Finish. Die mittelstarke Konkave bietet gute Kontrolle beim Fahren.",
            },
            en:{
                header: "Freerider &quot;Haedge&quot;" , 
                text:"Producing a stable and durable board was crucial for the design. This is not only taken up by the shape but also by the print on the bottom side. The motif shows the harbor crane of the Haedge peninsula and a flag with Rostock's heraldic animal, the griffin. The symbol on top represents one of the braces of the crane, which confer stability. Due to its relatively compact dimensions, the board is an ideal travel companion.",
                structureText: "For the first time produced in a vacuum process. The structure consists of birch plywood in combination with a poplar core, reinforced with glass fibers. Maple veneer on the bottom provides a nice finish. The moderately deep concave provides good control while riding.",
            },
            size: "9'' x 37''",
            wheelBase:"63 cm",
            concave:"1 cm",
            kicks: ""
        },
        images: [
            {largeImgUrl:"images/2_0_size_1200x803.jpg", smallImgUrl: "images/2_0_size_598x400.jpg", thumb:"images/2_0_400.jpg", photoSwipeIndex: undefined },
            {largeImgUrl:"images/2_3_size_800x1200.jpg", smallImgUrl: "images/2_3_size_400x600.jpg", thumb:"images/2_3_400.jpg", photoSwipeIndex: undefined },
            {largeImgUrl:"images/2_2_size_800x1200.jpg", smallImgUrl: "images/2_2_size_400x600.jpg", thumb:"images/2_2_400.jpg", photoSwipeIndex: undefined },
            {largeImgUrl:"images/2_1_size_1200x803.jpg", smallImgUrl: "images/2_1_size_598x400.jpg", thumb:"images/2_1_400.jpg", photoSwipeIndex: undefined },
            {largeImgUrl:"images/2_4_size_803x1200.jpg", smallImgUrl: "images/2_4_size_400x598.jpg", thumb:"images/2_4_400.jpg", photoSwipeIndex: undefined },
            {largeImgUrl:"images/2_5_size_801x1200.jpg", smallImgUrl: "images/2_5_size_400x599.jpg", thumb:"images/2_5_400.jpg", photoSwipeIndex: undefined }
        ]
    },  {
        description: { 
            de: {
                header: "Mini Cruiser &quot;Rostock&quot;" , 
                text:"Mein erstes Deck!! Mein erstes Board sollte etwas besonderes sein, mit dem ich persönlich etwas verbinde. Daher entschied ich mich bei der Wahl des Themas für meine Heimatstadt.",
                structureText: "Hergestellt mit einer einfachen Balkenpresse. Der Aufbau besteht aus Birke und Glasfaserverstärkung. Den Griff fand ich sinnvoll zum Tragen und um das Board wenn nötig anzuschließen. Der Print zeigt den Rostocker Stadhafen aus der Vogelperspektive. Auf der Oberseite befindet sich das Stadtwappen.",
            },
            en:{
                header: "Mini Cruiser &quot;Rostock&quot;" , 
                text:"My first deck!! My first board had to be something special I am personally connected with. Therefore, I chose prominent elements from my hometown for its theme.",
                structureText: "Made with a simple bar press. The structure is made of birch and a glass fiber reinforcement. I found the handle to be useful for carrying and to lock the board if necessary. The print shows Rostock's water front from a bird's eye view. On the top is the town's coat of arms",
            },
            size: "8.15'' x 27.75''",
            wheelBase:"",
            concave:"",
            kicks: ""
        },
        images: [
            {largeImgUrl:"images/1_1_size_900x1200.jpg", smallImgUrl: "images/1_1_size_400x533.jpg", thumb:"images/1_1_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/1_2_size_900x1200.jpg", smallImgUrl: "images/1_2_size_400x533.jpg", thumb:"images/1_2_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/1_3_size_1200x900.jpg", smallImgUrl: "images/1_3_size_533x400.jpg", thumb:"images/1_3_400.jpg", photoSwipeIndex: undefined },      
            {largeImgUrl:"images/1_4_size_1200x900.jpg", smallImgUrl: "images/1_4_size_533x400.jpg", thumb:"images/1_4_400.jpg", photoSwipeIndex: undefined },      
        ]
    }    
];