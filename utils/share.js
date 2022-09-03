export class ShareTo {
    constructor(item) { this.item = item; }

    email() {
        const subject = this.item.attributes.title + " by " + this.item.attributes.author;
        window.open(`mailto:?subject=${subject}`)
    }

    copyLink() {
        if (!window.isSecureContext) {
            console.log("Insecure context, unable to copy")
            return
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {

                console.log("Copied url")
            })
                .catch(() => {
                    console.log("something went wrong");
                });
        }
    }

    whatsapp() {
        navigator.clipboard.writeText(window.location.href);
        window.open(`whatsapp://send?text=${window.location.href}`)
    }
}