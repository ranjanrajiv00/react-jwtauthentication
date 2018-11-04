import React from 'react';
import { artifactoryService } from './Artifactory.Services';
export default class Artifactory extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        artifactoryService.get().then((data) => {
            this.setState({
                data: data
            });
        })
    }

    render() {
        const rows =  this.state && this.state.data && this.state.data.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                </tr>
            );
        });
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Artifactory</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}