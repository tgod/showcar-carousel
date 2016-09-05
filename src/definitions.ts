interface IPagination {
    left: HTMLAnchorElement;
    right: HTMLAnchorElement;
    indicator: HTMLDivElement;
}

type MoveDirection = number;
type CarouselIndex = number;
type CarouselOffset = number;

type DirectionAttr = "data-direction";
type DirectionValue = "left" | "right";

interface NavigationButton extends HTMLAnchorElement {
    getAttribute(name: DirectionAttr): DirectionValue;
}

type CarouselModeAttr = "loop";
type CarouselMode = "finite" | "infinite";

type SlidesOrder = number[];
interface CarouselItem extends HTMLDivElement { }
type CarouselItemsList = CarouselItem[];


interface CarouselElement extends HTMLElement {
    getAttribute(name: CarouselModeAttr): CarouselMode;
}

interface CarouselState {
    index: CarouselIndex;
    offset: CarouselOffset;
    itemsOrder?: SlidesOrder;
};

interface ICarousel extends CarouselState {
    element: CarouselElement;
    container: HTMLDivElement;
    mode: CarouselMode;
    pagination: IPagination;
    touchStart: Coordinates | any;
}