/* eslint-disable react/jsx-props-no-spreading */
import { Pagination, PaginationItem } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getProducts } from "../redux/apiCalls";

const Paginate = ({ page, cat, sort }) => {
  const { numberOfPages } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    if (page) {
      //   getProducts(dispatch, cat, page, sort);
    }
  }, [dispatch, page]);

  return (
    <Pagination
      //   classes={{ ul: classes.ul }}
      count={numberOfPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem
          {...item}
          component={Link}
          to={
            cat
              ? `/products/${cat}?page=${item.page}&sort=${sort}`
              : `/products?page=${item.page}&sort=${sort}`
          }
        />
      )}
    />
  );
};

export default Paginate;
