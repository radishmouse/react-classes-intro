# Whirlwind intro to React Class Components

- [X] "Renderables" === "Components"
    - Interface example: Car
        - door
        - seat
        - break
        - key to start car
        - put in drive
        - drive to front yard
    - Interface: Renderable
        - can be initialized
        - can be drawn to the screen
        - can receive new data
        - can be torn down
        - can be garbage collected
- [X] Classes + components
    - [X] Three steps to convert a function component to a class component:
        1. Change the word `function` to `render`
        1. Wrap the `render()` in a `class <name of component> extends React.Component {}`
        1. There is no step 3!
    - [X] Wait, what is a component?
        - A component returns... JSX
            - And JSX is?
                - stuff that looks like HTML, but isn't
                - it is a call to `React.createElement()`
            - So that means it's a thing that returns a *React Element*
        - OK, what is a React Element?
            - It's a Plain JS Obj description of a DOM element
            - These two are equivalent:
            - ```
                <div className="App>
                    <h1>Hello!</h1>
                </div>
            - ```
                {
                    type: 'div',
                    {
                        className: 'App
                    },
                    [
                        {
                            type: 'h1',
                            null,
                            [
                                'Hello!'
                            ]
                        }
                    ]
                }
            ```
        - Why have React Elements if they're just descriptions of DOM elements??
            - So it can produce a Virtual DOM
                1. You give it a description of what to draw
                1. It sees if your description is different from what it already drew
                1. It only makes the minimum necessary changes to the real DOM
- [X] What's the equivalent to `useState` in Classes?
    1. Define `this.state` as an object in the `constructor()`
    1. Define a "helper function" (either an arrow function property or a regular method that you `.bind()` in the `constructor()`)
    1. And then 
        a. Pass that "slice" of state to any child that needs the slice of state
        a. Pass a reference to the helper function to any child that needs to update the slice of state