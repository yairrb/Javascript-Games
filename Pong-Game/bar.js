class Bar {

    constructor (x, y, width , heigth) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._heigth = heigth;
        this._direction = '';
    }

    set x ( value ) {
        this._x = value;
    };
    set y ( value ) {
        this._y = value;
    };

    set width ( value ) {
        this._width = value;
    };

    set heigth ( value ) {
        this._heigth = value;
    };

    set direction( value ) {
        this._direction = value;
    }

    get x() {
        return this._x;
    };

    get y() {
        return this._y;
    };

    get width() {
        return this._width;
    };

    get heigth() {
        return this._heigth;
    };

    get direction() {
        return this._direction;
    }
}