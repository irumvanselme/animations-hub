import animations from "../content/animations.json"

type Animation = {
    id: number;
    title: string
}

export function all () {
    return animations.data
}

export function one (id: number): Animation {
    let _item: Animation = null;
    animations.data.forEach((animation: Animation) => {
        if (animation.id == id) {
            _item = animation
        }
    })

    return _item;
}