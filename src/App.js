import React, { Component } from 'react';
import AddColorForm from './components/AddColorForm';
import ColorList from './components/ColorList';
import { v4 } from 'uuid';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: [],
        };
        this.addColor = this.addColor.bind(this);
        this.rateColor = this.rateColor.bind(this);
        this.removeColor = this.removeColor.bind(this);
    }

    addColor(title, color) {
        const colors = [
            ...this.state.colors,
            {
                id: v4(),
                title,
                color,
                rating: 0,
            },
        ];
        this.setState({ colors });
    }

    rateColor(id, rating) {
        const colors = this.state.colors.map(color =>
            (color.id !== id) ?
                color :
                {
                    ...color,
                    rating,
                },
        );
        this.setState({ colors });
    }

    removeColor(id) {
        const colors = this.state.colors.filter(
            color => color.id !== id,
        );
        this.setState({ colors });
    }

    render() {
        const { addColor, rateColor, removeColor } = this;
        const { colors } = this.state;
        return (
            <div className="App">
                <div className="container shadow-sm p-3 mb-5 bg-white rounded" style={{width: 800 + 'px'}}>
                    <div className="row">
                        <div className="col">
                            <AddColorForm onNewColor={addColor}/>
                        </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <div className="row">
                        <div className="col">
                            <ColorList colors={colors}
                                       onRate={rateColor}
                                       onRemove={removeColor}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;