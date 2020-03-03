"use strict";
import { createStore } from "redux";
//const createStore = require("redux").createStore;

const initialState = {};

// *Actions ----------------------------------

const actionOne = {
  type: "ACTON_ONE",
  payload: "action-1"
};

const actionTwo = {
  type: "ACTON_TWO",
  payload: "action-2"
};

// -------------------------------------------

// *ActonCreator -----------------------------

const ActionCreator = (state = initialState, action) => {
  switch (action.type) {
    case ACTON_ONE:
    case ACTON_TWO:
      return (state["status"] = action.payload);
    default: state;
  }
};

// -------------------------------------------

// *Store ------------------------------------

const store = createStore(ActionCreator);
ActionCreator(actionOne);
console.log(" lfhjdf" );