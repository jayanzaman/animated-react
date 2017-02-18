import React, {Component} from 'react';
const makeExpanding = (Target) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpen: false,
                searchTerm: 'Not Working',
                        };
        }

        onClick = () => {
            this.setState({isOpen: !this.state.isOpen});
        };
        onChange = () => {
            console.log(this)
            console.log()
            this.setState({searchTerm: "changed"})
        }

        render() {
            return (
                <div>
                    <Target {...this.props}
                        value={this.state.searchTerm}
                        isOpen={this.state.isOpen}
                        onClick={this.onClick}
                        onChange={this.onChange}
                    />
                <h3>Input is {this.state.searchTerm}</h3>
                </div>
            );
        }
    }
};
export default makeExpanding;
