class Rectangle {
    constructor(height, width) {
        this.name = "Rectangle";
        this.height = height;
        this.width = width;
    }
}

class FilledRectangle extends Rectangle {
    constructor(height, width, color) {
        super(height, color);
        this.name = "Filled Rectangle";
        this.color = color;
    }
}

