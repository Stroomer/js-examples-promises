export const loadImage = async (src) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.addEventListener('load',  ()    => resolve(img));
        img.addEventListener('error', (err) => reject(err));
        img.src = src;
    });
};

export const loadImages = async (arr) => {
    const promises = [];
    arr.map((src) => {
        const promise = loadImage(src);
        promises.push(promise);
    });
    return Promise.all(promises).then(images => images)
                                .catch(err   => console.error(err));
};