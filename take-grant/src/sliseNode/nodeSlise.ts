import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

export interface InodesList {
    node: string
    type: string
}
export interface InodeState {
    nodesList: Array<InodesList>
    nodeConections: Array<string>
}

const initialState: InodeState = {
    nodesList: [],
    nodeConections: [],
}


export const nodeSlise = createSlice({
    name: "node",
    initialState,
    reducers: {
        addNodes: (state,  action:PayloadAction<InodesList>) => {
            state.nodesList.push(action.payload)
        }
    }
})
export const selectNodesList = (state: RootState) => state.node.nodesList

export const { addNodes } = nodeSlise.actions
export default nodeSlise.reducer