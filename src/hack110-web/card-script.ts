let myImage: HTMLImageElement = document.getElementById("pic") as HTMLImageElement;

myImage.onclick = function (event: MouseEvent): void {
    myImage.src = "newImageGoesHere";
};