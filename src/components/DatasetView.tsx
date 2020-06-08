import React from 'react';
import '../App.css';
import WordCloud from "./WordCloud";
import RecordTable from "./RecordTable";
import KeywordCrumb from "./KeywordCrumb";
import Paper from "@material-ui/core/Paper";
import DataLoader from "../models/DataLoader";
import CategoryPie from "./CategoryPie";
import {Tab, Tabs} from "@material-ui/core";
import AmountSlider from "./AmountSlider";
import QueryBuilder from "../models/QueryBuilder";
import DateSlider from "./DateSlider";

interface DatasetState {
    value: number

}

interface DatasetProps {
    loader: DataLoader
}

export default class DatasetView extends React.Component<DatasetProps, DatasetState> {
    private value: number = 0

    constructor(props: DatasetProps) {
        super(props);

        this.value = this.parseQuery(QueryBuilder.getInstance().getQuery())

        this.state = {
            value: this.value,
        }

        QueryBuilder.getInstance().addGenerator(this.generateQuery.bind(this), 1)
    }

    componentDidMount(): void {
        this.props.loader.addChangeCallback(() => this.forceUpdate())
    }

    parseQuery(query: string): number {
        if (query[0] === '?') query = query.slice(1)
        const res = query.split('&').filter((e) => e.startsWith('tab='))
        if (res.length === 0) return 0
        return Number.parseInt(res[0].substr(4))
    }

    generateQuery(): string {
        return 'tab=' + this.value
    }

    render() {
        const loader = this.props.loader

        const onValueChange = (e: any, value: number) => {
                this.value = value
                this.setState({value: value})
                QueryBuilder.getInstance().update()
        }

        return (
            <div>
                <KeywordCrumb style={{margin: 10}} dataloader={loader}/>
                <Tabs value={this.state.value}
                      onChange={onValueChange}
                      variant="scrollable"
                      indicatorColor="primary" textColor="primary">
                    <Tab label="Keywords"/>
                    <Tab label="Fund"/>
                    <Tab label="Division"/>
                    <Tab label="Department"/>
                    <Tab label="GL"/>
                    <Tab label="Event"/>
                    <Tab label="Amount"/>
                    <Tab label="Date"/>
                </Tabs>

                <Paper elevation={2} style={{padding: 10}}>
                <WordCloud hidden={this.state.value !== 0} dataloader={loader}/>
                <CategoryPie hidden={this.state.value !== 1} category={"fund"} dataloader={loader}/>
                <CategoryPie hidden={this.state.value !== 2} category={"division"} dataloader={loader}/>
                <CategoryPie hidden={this.state.value !== 3} category={"department"} dataloader={loader}/>
                <CategoryPie hidden={this.state.value !== 4} category={"gl"} dataloader={loader}/>
                <CategoryPie hidden={this.state.value !== 5} category={"event"} dataloader={loader}/>
                <AmountSlider hidden={this.state.value !== 6} dataloader={loader}/>
                <DateSlider hidden={this.state.value !== 7} dataloader={loader}/>
                </Paper>
                <br/>
                <Paper elevation={2}>
                <RecordTable dataloader={loader} groupBy={this.getCategory(this.state.value)} onChange={(value) => onValueChange(this, this.columnToTabID(value))}/>
                </Paper>
            </div>
        );
    }

    private getCategory(index: number) {
        switch (index) {
            case 1: return "fund"
            case 2: return "division"
            case 3: return "department"
            case 4: return "gl"
            case 5: return "event"
            case 7: return "date"
            default: return undefined
        }
    }

    private columnToTabID(column: string) {
        switch (column) {
            case "description": return 0
            case "fund": return 1
            case "division": return 2
            case "department": return 3
            case "gl": return 4
            case "event": return 5
            case "amount": return 6
            case "date": return 7
            case "id": return 0
            default: return 0
        }
    }
}