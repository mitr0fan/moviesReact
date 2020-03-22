import React from "react";
import { MainPage } from "./main-page/main-page";
import { connect } from "react-redux";
import { State } from '../types/state';
import { Loading } from "../components/loading/loading";

class Index extends React.Component<any> {
    static getInitialProps({state}: any) {}

    loading() {
        if(this.props.loadingStatus) {
            return <Loading />
        }
    }

    render() {
        return (
            <>
            {this.loading()}
            <MainPage />
            </>
        )
    }
}

function mapStateToProps(state: State) {
    return {
        loadingStatus: state.loadingStatus
    }
}
export default connect(mapStateToProps)(Index);
