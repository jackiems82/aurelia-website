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
}

export class BoardDetails{
    images: ImageDetails[];
    description: Description;
}


let data:BoardDetails[] =
    [{
        description: { header: "Board1" , text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus at eros sit amet mattis. Nullam sed massa velit. Aliquam non erat nec metus egestas eleifend et a orci. Quisque justo tellus, posuere id pellentesque id, euismod non nibh. Proin ut pellentesque mauris. Suspendisse potenti. Proin quis rhoncus est."

+ "Suspendisse rhoncus nisl id dolor faucibus, pharetra pretium mi ornare. Maecenas rhoncus laoreet nulla, sit amet pharetra risus aliquet nec. Phasellus nec sagittis arcu, eu porttitor justo. Nulla vitae mi auctor nunc egestas tempus ut aliquam nunc. Nunc sem ex, condimentum eu elementum vitae, egestas imperdiet enim. Phasellus maximus erat ut mauris commodo fermentum. Ut ut erat ac dui egestas efficitur. Phasellus non maximus massa. Integer vitae ornare nisl. Curabitur auctor felis enim, eu commodo diam volutpat eu. Vestibulum eget orci sed elit pretium congue eget et tortor. Aenean sed egestas eros. In id arcu a est viverra laoreet at sit amet dui. Nullam euismod venenatis tempus." },
        images: [
            {imageUrl:"", thumb:"images/2_3_320x480.jpg"},
            {imageUrl:"", thumb:"images/2_2_320x480.jpg"},
            {imageUrl:"", thumb:"images/2_1_717x480.jpg"},
            {imageUrl:"", thumb:"images/2_5_320x214.jpg"}
        ]
    },  {
        description: { header: "Board2" , text: "Lorem" +"</br>"+ "ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus at eros sit amet mattis. Nullam sed massa velit. Aliquam non erat nec metus egestas eleifend et a orci. Quisque justo tellus, posuere id pellentesque id, euismod non nibh. Proin ut pellentesque mauris."

+ "Suspendisse rhoncus nisl id dolor faucibus, pharetra pretium mi ornare." },
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