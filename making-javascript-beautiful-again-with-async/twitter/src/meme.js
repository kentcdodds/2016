import memeMaker from 'meme-maker';
import htmlEntities from 'html-entities';
const entities = new htmlEntities.AllHtmlEntities();

class Meme {
    async create(caption) {
        return new Promise((resolve, reject) => {
            caption = caption.replace('RT @chuck_facts:', '');
            caption = entities.decode(caption);

            const { topText, bottomText } = this.split(caption);

            const infile = 'images/chuck-norris.jpg';
            const outfile = 'images/chuck-norris-out.jpg';

            memeMaker({
                topText: topText,
                bottomText: bottomText,
                image: infile,
                outfile: outfile,
                fontSize: 60,
                strokeWeight: 1
            },
            error => {
                if (error) {
                    reject(error);
                } else {
                    resolve(outfile);
                }
            });
        });
    }

    split(text) {
        const half = Math.floor(text.length / 2);
        const mid = text.lastIndexOf(' ', half);

        return {
            topText: text.slice(0, mid),
            bottomText: text.slice(mid + 1)
        };
    }
}

module.exports = new Meme();
