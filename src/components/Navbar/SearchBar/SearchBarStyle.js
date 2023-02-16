import styled from "styled-components";

export const SearchBarStyle = {
    Search: styled.div`
      position: relative;
      height: 40px;
      width: 100%;
      
      & form{
        position: relative;
        height: 40px;
        width: 100%;
      }
      
      & input {
        width: 100%;
        height: 100%;
        border: 1px solid rgba(118, 121, 127, 0.3);
        font-weight: 400;
        font-size: .875rem;
        font-family: Inter, sans-serif;
        outline: none;
        padding: 0 calc(15% + 38px) 0 16px;
        background-color: #fff;
        vertical-align: top;
        box-shadow: 0 0 0 0 rgb(0 0 0 / 20%), 0 0 0 0 rgb(0 0 0 / 8%);
        transition: box-shadow .2s ease;
        border-radius: 4px;
        position: relative;
        left: 20px;
        @media screen and (max-width: 990px) {
          left: 0;
        }

        @media screen and (max-width: 820px) {
          background-color: #eaeaea;
          border-radius: 9px;
          border: 1px solid rgba(118, 121, 127, 0.13);
        }
      }
    `,

    SearchBar: styled.div`
      width: 100%;
      height: 100px;
      position: absolute;
      left: 20px;
      right: 0;
      top: calc(100%);
      background-color: #fff;
      opacity: 1;
      z-index: 10;
      border: 1px solid rgba(118, 121, 127, 0.3);
      border-top: none;
      box-sizing: border-box;
      box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
      border-radius: 0 0 12px 12px;

      @media screen and (max-width: 990px) {
        left: 0;
      }
    `,

    SearchBtn: styled.button`
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: -20px;
      border: none;
      z-index: 1;
      width: 15%;
      border-radius: 0 4px 4px 0;
      background: rgba(118, 121, 127, 0.05);
      height: 40px;
      cursor: pointer;
      
      & i {
        color: black;
        opacity: .6;
        font-size: 16px;
        font-weight: 400;
      }
      
      @media screen and (max-width: 990px) {
        right: 0;
      }
    `,

    ClearBtn: styled.span`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      right: 35px;
      border: none;
      z-index: 1;
      width: 15%;
      height: 40px;

      & i {
        cursor: pointer;
        color: #8d8d8d;
      }

      @media screen and (max-width: 990px) {
        right: 40px;
      }
    `,
}