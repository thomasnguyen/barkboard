import Link from "next/link";
import styled from "styled-components";
import React, { useState, useEffect } from "react";

const FlexContainer = styled.div`
  display: grid;
  grid-template-rows: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  gap: 20px 20px;
  grid-template-areas:
    ". . ."
    ". . .";
  justify-content: center;
  align-content: center;

  margin: auto;
`;

const CategoryItem = styled.div`
  background: #22242d;
  border: 1px solid #2a2c33;
  border-radius: 20px;
  width: 100px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  h4 {
    color: #e0e0e0;
    font-size: 14px;
    font-weight: 400;
    margin: 0;
  }

  img {
    width: 40px;
    height: 40px;

    padding-bottom: 10px;
  }
`;

const getCategories = () => {
  return new Promise((resolve, reject) => {
    resolve([
      {
        icon:
          "https://user-images.githubusercontent.com/14298038/110393480-75956a80-801f-11eb-8247-6743055bd67a.png",
        label: "door",
      },
      {
        icon:
          "https://user-images.githubusercontent.com/14298038/110393478-75956a80-801f-11eb-9bd0-7f1e9f96da41.png",
        label: "dogs",
      },
      {
        icon:
          "https://user-images.githubusercontent.com/14298038/110393476-74fcd400-801f-11eb-82a7-290e76d5adbf.png",
        label: "cars",
      },
    ]);
  });
};

export default function Directory({ ...props }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let mounted = true;
    getCategories().then((items) => {
      console.log(items);
      if (mounted) {
        setCategories(items);
      }
    });
    return () => (mounted = false);
  }, []);

  console.log({ categories });
  return (
    <>
      <FlexContainer>
        {categories.map((cat) => {
          return (
            <Link
              href="/sounds/[categoryId]"
              as={`/sounds/${cat.label}`}
              key={cat.label}
            >
              <CategoryItem key={cat.label}>
                <img src={cat.icon} label={cat.label} />
                <h4>{cat.label}</h4>
              </CategoryItem>
            </Link>
          );
        })}
      </FlexContainer>
    </>
  );
}
