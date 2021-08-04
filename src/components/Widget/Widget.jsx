import { useEffect, useState } from "react";
const Widget = (props) => {
    const [dataSet, setDataSet] = useState(props.list.dataSet);
    const [filterData, setFilterData] = useState(props.filters);
    const [stats, setStats] = useState(props.list.stats);
    useEffect(() => {
        setDataSet(dataSet);
        setFilterData(filterData);
        setStats(stats);
    }, []);
    const sortItems = () => {

    }
    const maxMin = (a) => {
        console.log(a);
    }
    return (
            <div className={`widget`} data-type={props.type}>
                <header>
                    <h3>
                        {props.type}
                    </h3>
                    <select name="sort-option" onChange={sortItems} className="sort-option form-select">
                        <option value="label" selected="">Sort by Label</option>
                        <option value="value">Sort by Value</option>
                    </select>
                    <div className="btn btn-primary max-min" onClick={() => maxMin(props.type)}>
                        <i className="fa fa-arrows-alt"></i>
                    </div>
                </header>
                <div className="chart">
                    <div className="controls">
                        <nav>
                            <a href="javascript:void(0);">{filterData.label}</a>
                        </nav>
                        <div>
                            <span>{filterData.value}%</span>
                        </div>
                    </div>
                    <div className="canvas-container">
                        <div className="canvas" id="highlights">
                            <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>{dataSet.header[0]}</th>
                                        <th>{dataSet.header[1]}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        dataSet.data.map(item => (
                                            <tr key={Math.floor(Math.random() * 100)} style={{ color: item.color }}>
                                                <td>{item.label}</td><td>{item.value}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="info">
                    <h4>Stats:</h4>
                    <div className="info-module">
                        <div className="heading">
                            <span>{stats.ATTRIBUTE_1.label}</span>
                            <span>{stats.ATTRIBUTE_1.value}%</span>
                        </div>
                        <div className="progress atib-1"></div>
                    </div>
                    <div className="info-module">
                        <div className="heading">
                            <span>{stats.ATTRIBUTE_2.label}</span>
                            <span>{stats.ATTRIBUTE_2.value}%</span>
                        </div>
                        <div className="progress atib-2"></div>
                    </div>
                    <div className="info-module">
                        <div className="heading">
                            <span>{stats.ATTRIBUTE_3.label}</span>
                            <span>{stats.ATTRIBUTE_3.value}%</span>
                        </div>
                        <div className="progress atib-3"></div>
                    </div>
                    <nav>
                        <a href={`http://13.232.99.42/${props.url}`} target="_blank"><span>View API</span><span className="fa fa-arrow-right fa-lg"></span></a>
                    </nav>
                </div>
            </div>
        )
      
    
}

export default Widget;