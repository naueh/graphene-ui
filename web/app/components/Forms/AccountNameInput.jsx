import React from "react";
import {PropTypes, Component} from "react";
import classNames from "classnames";
import AccountActions from "actions/AccountActions";
import AccountStore from "stores/AccountStore";
import {debounce} from "lodash";
import BaseComponent from "../BaseComponent";

class AccountNameInput extends BaseComponent {

    constructor(props) {
        super(props, AccountStore);
        this.state.value = null;
        this.state.error = null;
        this.state.existing_account = false;
        this.handleChange = this.handleChange.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.validateAccountName = debounce(this.validateAccountName, 250);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.value !== this.state.value
               || nextState.error !== this.state.error
               || nextState.existing_account !== this.state.existing_account
               || nextState.searchAccounts !== this.state.searchAccounts
    }

    componentDidUpdate() {
        if (this.props.onChange) this.props.onChange({valid: !this.getError()});
    }

    value() {
        return this.state.value;
    }

    setValue(value) {
        this.setState({value});
    }

    clear() {
        React.findDOMNode(this.refs.input).value = "";
    }

    focus() {
        React.findDOMNode(this.refs.input).focus();
    }

    valid() {
        return !this.getError();
    }

    getError() {
        if(this.state.value === null) return null;
        let error = null;
        if (this.state.error) {
            error = this.state.error;
        } else if (this.props.accountShouldExist || this.props.accountShouldNotExist) {
            let account = this.state.searchAccounts.find(a => a === this.state.value);
            if (this.props.accountShouldNotExist && account) {
                error = "Account name is already taken.";
            }
            if (this.props.accountShouldExist && !account) {
                error = "Account not found.";
            }
        }
        return error;
    }

    validateAccountName(value) {
        this.state.error = null;
        if (value && !(/^[a-z]+(?:[a-z0-9\-\.])*$/.test(value) && /[a-z0-9]$/.test(value))) {
            this.state.error = "Account name can only contain lowercase alphanumeric characters, dots, and dashes.\nMust start with a letter and cannot end with a dash.";
        }
        if(value === "") {
            this.state.error = "Please enter valid account name";
        }
        this.setState({value: value, error: this.state.error});
        if (this.props.onChange) this.props.onChange({value: value, valid: !this.getError()});
        if (this.props.accountShouldExist || this.props.accountShouldNotExist) AccountActions.accountSearch(value);
    }

    handleChange(e) {
        e.preventDefault();
        e.stopPropagation();
        this.validateAccountName(e.target.value);

    }

    onKeyDown(e) {
        if (this.props.onEnter && event.keyCode === 13) this.props.onEnter(e);
    }

    render() {
        let error = this.getError();
        let class_name = classNames("form-group", "account-name", {"has-error": error});
        return (
            <div className={class_name}>
                <label>Account Name</label>
                <input name="value" type="text" id={this.props.id} ref="input" autoComplete="off"
                       placeholder={this.props.placeholder} defaultValue={this.props.initial_value}
                       onChange={this.handleChange} onKeyDown={this.onKeyDown}/>
                {error}
            </div>
        );
    }
}

AccountNameInput.propTypes = {
    id: PropTypes.string,
    placeholder: PropTypes.string,
    initial_value: PropTypes.string,
    onChange: PropTypes.func,
    onEnter: PropTypes.func,
    accountShouldExist: PropTypes.bool,
    accountShouldNotExist: PropTypes.bool
};

export default AccountNameInput;
