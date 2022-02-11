
import Page from "../components/Page";
import React, { Component } from 'react';
import { AttributeFilter} from "@gooddata/react-components";
import "@gooddata/react-components/styles/css/dateFilter.css";
import '@gooddata/react-components/styles/css/main.css';


const attributeUri = "/gdc/md/y2lwt04m1kb3r4mlclsu39tmvf935vy9/obj/2211";
const projectId = "y2lwt04m1kb3r4mlclsu39tmvf935vy9";
const attributeDisplayFormId = "label.restaurantlocation.locationstate";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attributeFilter: {},
        };
    }

    onApplyAttributeFilter = (filter) => {
        console.log('AttributeFilterExample filter', filter);

        const isPositive = !!filter.in;
        const elementsProp = isPositive ? 'in' : 'notIn';

        const filters = {
            [isPositive ? 'positiveAttributeFilter' : 'negativeAttributeFilter']: {
                displayForm: {
                    identifier: filter.id
                },
                [elementsProp]: filter[elementsProp].map(element => (`${attributeUri}/elements?id=${element}`))
            }
        };

        this.setState({
            attributeFilter: filters,
        });
    };

    render(){

        //const attributeFilter = this.state.attributeFilter;


    return <Page>
        <div className="App ">
                <header>
                    <div className={"dash-filters-all"}>
                        <div className={"s-attribute-filter"} style={{ width: 150, height: 50  }}>
                            <AttributeFilter
                                identifier={attributeDisplayFormId}
                                projectId={projectId}
                                fullscreenOnMobile={false}
                                onApply={this.onApplyAttributeFilter}
                            />
                        </div>
                    </div>
                   

                </header>
            </div>
    </Page>;
        }
}

export default Home;
