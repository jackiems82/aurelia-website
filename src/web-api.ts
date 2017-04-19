export class WebApi{    

    public sendEmail(to: string, message: string): void {
        alert("Sending " + message + " to " + to);
        // return new Promise(resolve=> resolve(true));
    }

    public getImageDetails(index: number): Promise<string[]> {        
        return new Promise((resolve, reject) => {
                if (index <= images.length -1)
                    resolve(images[index])
                else
                    reject();
            });
    }    
}

export class ImageDetails{
    imageUrl: string;
    thumb: string;
}


let images:ImageDetails[][] = [
    [
        {imageUrl:"https://abload.de/img/17097873_10208962076263bxz.jpg", thumb:"https://abload.de/thumb/17097873_10208962076263bxz.jpg"},
        {imageUrl:"https://abload.de/img/img_5627juaw1.jpg", thumb:"https://abload.de/thumb/img_5627juaw1.jpg"},
        {imageUrl:"https://abload.de/img/dscf0257hrshj.jpg", thumb:"https://abload.de/thumb/dscf0257hrshj.jpg"}
    ],
    [
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
    ],
    [
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
    ],
    [
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
    ],
    [
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
    ],
    [
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
    ],
    [
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
        {imageUrl:"", thumb:""},
    ]
];