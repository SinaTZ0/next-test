import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type TagT = {
  Name: string;
  LastName: string;
};

export type TagDataT = {
  Tags: {
    [key: string]: {
      Name: string;
      LastName: string;
    };
  };
};

const initialState: TagDataT = {
  Tags: {
    1698421148239: {
      Name: "Sina",
      LastName: "Tofangsaz",
    },
    1698421150181: {
      Name: "Seriya",
      LastName: "Hush",
    },
  },
};

export const TagsSlice = createSlice({
  name: "Tags",
  initialState,
  reducers: {
    AddingTag: (state: TagDataT, action: PayloadAction<TagT>) => {
      state.Tags[Date.now()] = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddingTag } = TagsSlice.actions;

export default TagsSlice.reducer;
