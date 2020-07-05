import React from 'react';
import { Dispatch } from "redux";
import styles from './styles.module.scss';
import { connect } from "react-redux";
import { add } from "./my-title-actions";
import { getCheck } from "./my-title-selectors";

type titleProps = {
	children: string;
	add: () => any;
	something?: number;
}

export const myTitle = ({ children, add, something }: titleProps) => {
	return (
		<>
			<button onClick={add}>123</button>
			<h1>{something}</h1>
			<span>VANA BIBA</span>
			<h1 className={styles.title}>{children}</h1>
		</>
	)
}

const mapStateToProps = (state: any) => {
	return {
		something: getCheck(state),
	}
}

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		// @ts-ignore
		add: () => dispatch(add()),
	}
}

export const Title = connect(mapStateToProps, mapDispatchToProps)(myTitle);