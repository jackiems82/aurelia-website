import { Items } from '../resources/elements/photoswipe-modal';
import { ImageModel, Url } from '../resources/ImageModel';


export class About {
    ps: any;
    model: ImageModel;
    pswpElement;
    items;
    options;  


    constructor() {
        this.model = new ImageModel();
        this.model.smallImages = new Array<Url>(); 
        this.model.mediumImages = new Array<Url>();
        this.model.largeImages = new Array<Url>();
    }

    attached() {
        this.model.smallImages.push({ url: "images/Stadthafen_230.jpg" });
        this.model.mediumImages.push({ url: "images/Stadthafen_230.jpg"});
        this.model.largeImages.push({ url: "images/stadthafen_size_805x1200.jpg" });

        // Parse URL and open gallery if it contains #&pid=3&gid=1
        let params = this.ps.photoswipeParseHash();

        if (!this.ps.items) {
            this.createImageList();
        }       

        // Currently there is only one gallery, so that index will always be 1
        if (params.pid)
            this.ps.openPhotoSwipe(params.pid);  
    }

    createImageList() {
        var items: Array<Items> = [];

        var thumbnails = document.querySelectorAll('.photoswipe')
        var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;

        for (var n = 0; n < this.model.smallImages.length; n++) {
            var rect = thumbnails[n].getBoundingClientRect();

            items.push({
                src: this.model.largeImages[n].url,
                msrc: this.model.smallImages[n].url,
                w: 805,
                h: 1200,
                thumbBounds: { x: rect.left, y: rect.top + pageYScroll, w: rect.width }
            });
        }

        this.ps.items = items;
    }

    clickImage(id: number) {
        if (!this.ps.items) {
            this.createImageList();
        }       
        this.ps.openPhotoSwipe(id);
    }
}