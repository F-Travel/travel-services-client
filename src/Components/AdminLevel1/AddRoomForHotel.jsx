import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { uploadImageClient } from "../../firebase/config";
import InputTemplate from "../Common/InputTemplate";
import { Title } from "./ListHotel";
import { Convenient } from "./RegisterHotel";

const AddRoomForHotel = (props) => {
  return (
    <div className={"fkdkaskalskalsas"} style={{ width: "100%" }}>
      <Title is_edit={props?.is_edit} title={props?.is_edit===true ? "Sửa khách sạn" : "Đăng ký khách sạn"} title1={props?.is_edit=== true ? "Sửa phòng" : "Đăng ký phòng"}  />
      <MainAddRoom />
    </div>
  );
};

const MainAddRoom = (props) => {
  const [listImage, setListImage]= useState([])
  const isChooseImage= listImage?.length> 0 ? true: false
  const [roomName, setRoomName]= useState("")
  const [price, setPrice]= useState()
  const [numberPeople, setNumberPeople]= useState()
  const [roomArea, setRoomArea]=  useState()
  const [hotelId, setHotelId]= useState()
  const [properties, setProperties]= useState([])
  return (
    <div className={"fkdkalskalrwarae"} style={{ width: "100%", padding: 10 }}>
      <div className={"vkdkskadfdsdssd"} style={{ marginBottom: 20 }}>
        Thông tin chính
      </div>
      <Tab1 roomName={roomName} setRoomName={setRoomName} price={price} setPrice={setPrice} numberPeople={numberPeople} setNumberPeople={setNumberPeople} roomArea={roomArea} setRoomArea={setRoomArea} />
      <br />
      <br />
      <Convenient convenient={properties} setConvenient={setProperties} />
      <br /><br />
      <Image listImage={listImage} setListImage={setListImage} isChooseImage={isChooseImage} />
      <br />
      <BtnCreate />
    </div>
  );
};

const Tab1 = (props) => {
  return (
    <div
      className={"fkjaksjkfaweaw"}
      style={{
        width: "100%",
        padding: 10,
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <ItemOption width={"calc(100% / 3)"} title={"*Tên phòng"} />
      <ItemOption width={"calc(100% / 3)"} title={"*Lọai phòng"} />
      <ItemOption width={"calc(100% / 3)"} title={"*Giá phòng"} />
      <ItemOption width={"calc(100% / 3)"} title={"*Số lượng giường"} />
      <ItemOption width={"calc(100% / 3)"} title={"*Diện tích"} />
    </div>
  );
};

const Tab2 = (props) => {
  return (
    <div
      className={"fkjjjasjaskjasj"}
      style={{ width: "100%", padding: 10, borderTop: "1px solid #000" }}
    >
      <TitleItem title={"Tiện nghi và nội quy"} />
      <div
        className={"fgjkkdkldskldkla"}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
          flexWrap: "wrap",
        }}
      >
        <ItemOption2 type={"checkbox"} title={"Wifi"} />
        <ItemOption2 type={"checkbox"} title={"Máy lạnh"} />
        <ItemOption2 type={"checkbox"} title={"WC"} />
        <ItemOption2 type={"checkbox"} title={"Chỗ để xe"} />
      </div>
      <br />
      <TitleItem title={"Hướng nhìn"} />
      <div
        className={"fgjkkdkldskldkla"}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
          flexWrap: "wrap",
        }}
      >
        <ItemOption2 type={"checkbox"} title={"Núi"} />
        <ItemOption2 type={"checkbox"} title={"Biển"} />
        <ItemOption2 type={"checkbox"} title={"Sông"} />
      </div>
      <br />
      <TitleItem title={"Phòng tắm"} />
      <div
        className={"fgjkkdkldskldkla"}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: 30,
          flexWrap: "wrap",
        }}
      >
        <ItemOption2 title={"Đồ vệ sinh cá nhân"} />
        <ItemOption2 title={"Dép"} />
      </div>
      <br />
    </div>
  );
};

export const ItemOption = (props) => {
  return (
    <div
      className={"fjkdksdfadsladas"}
      style={{ width: props.width, paddingRight: 20, marginBottom: 20 }}
    >
      <div className={"fkdjsgkfkdsasfd"} style={{ marginBottom: 12 }}>
        {props.title}
      </div>
      <div
        className={"fajfjdkdksdksasa"}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputTemplate
          type={props.type}
          onChange={() => props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          style={{
            width: "100%",
            height: 40,
            background: "#d9d9d9",
            padding: 10,
            border: "none",
            outlineColor: "#2e89ff",
          }}
        />
      </div>
    </div>
  );
};

export const ItemOption2 = (props) => {
  return (
    <div
      className={"fjsdjkskaskldkla"}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <div className={"fkjsdkkkasasasa"} style={{ fontSize: 16 }}>
        {props.title}
      </div>
      <div
        className={"fdjlfklaklsdka"}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <InputTemplate
          type={props.type}
          onChange={() => props.onChange}
          value={props.value}
          placeholder={props.placeholder}
          style={{
            width: 16,
            height: 16,
            background: "#d9d9d9",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export const TitleItem = (props) => {
  return (
    <div
      className={"aklklakklalkakra"}
      style={{ fontWeight: 600, marginBottom: 20 }}
    >
      {props.title}
    </div>
  );
};

const BtnCreate = (props) => {
  return (
    <div
      className={"fkaskldkldklska"}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px 0",
      }}
    >
      <button
        className={"mdlkdskldklkaa"}
        style={{
          padding: "10px 30px",
          background: "#2e89ff",
          cursor: "pointer",
          border: "none",
          outline: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        Lưu
      </button>
    </div>
  );
};

export default AddRoomForHotel;

const Image= (props)=> {
  const f = (e) => {
    Object.values(e.target.files).map((item) =>
      props?.setListImage((prev) => [
        ...prev,
        {
          img: item,
          imgPreview: URL.createObjectURL(item),
          key: item.lastModified,
        },
      ])
    );
  };

  const a= (e)=> {
    props?.setListImage(prev=> ([...prev, {img: e.target.files[0], imgPreview: URL.createObjectURL(e.target.files[0]), key: e.target.files[0].lastModified}]))
  }
  // eslint-disable-next-line
  const testUpload = async () => {
    // listImage.map(item=> )
    const a = await uploadImageClient(props?.listImage[0].img, props?.setResult);
    console.log(a);
  };
  return (
    <div className={"fskjakejakwjaklawwa"} style={{ width: "100%" }}>
      <TitleItem title={"Hình ảnh *"} />
      <div
        className={"fjajkjsklajraeweaa"}
        style={{
          width: "100%",
          padding: 20,
          display: "flex",
          position: "relative",
          background: "#d9d9d9",
          height: 400,
          flexWrap: "wrap",
        }}
      >
        {props?.isChooseImage === true &&
          
          <>
            <>
              {props?.listImage.map((item, key) => (
              <div
                key={key}
                className={"dlakjklajwaasas"}
                style={{
                  width: 150,
                  height: 150,
                  padding: 10,
                  position: "relative",
                }}
              >
                <img
                  src={item.imgPreview}
                  alt="open"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "1px solid #e7e7e7",
                  }}
                />
                <div
                  title={"Xóa"}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                  onClick={() =>
                    props?.setListImage(
                      props?.listImage.filter(
                        (img) => parseInt(img.key) !== parseInt(item.key)
                      )
                    )
                  }
                >
                  <AiFillCloseCircle style={{ color: "#3a3b3c" }} />
                </div>
              </div>
              ))}
              </>
              <>
              {
                props?.listImage?.length < 5 && <div style={{padding: 10}}><Button color={"primary"} style={{height: 130, width: 130, position: "relative"}}>Thêm
                  <input
                    onChange={a}
                    type="file"
                    multiple
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: "100%",
                      height: "100%",
                      zIndex: 9,
                      cursor: "pointer",
                      top: 0,
                      left: 0,
                    }}
                  />
                </Button></div>
              }
              </>
          </>
          }

        {props?.isChooseImage === false && (
          <div
            className={"fkdjksjakwjawawas"}
            style={{
              width: 80,
              height: 80,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              position: "absolute",
              background: "#fff",
              cursor: "pointer",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)    ",
            }}
          >
            <div
              className={"fjdadjkwljeakwawa"}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <GrAdd style={{ width: 24, height: 24 }} />
            </div>
            <div style={{ textAlign: "center", fontWeight: 600, fontSize: 14 }}>
              Upload
            </div>
            <input
              onChange={f}
              type="file"
              multiple
              style={{
                position: "absolute",
                opacity: 0,
                width: "100%",
                height: "100%",
                zIndex: 9,
                cursor: "pointer",
                top: 0,
                left: 0,
              }}
            />
          </div>
        )}
        {/* rule */}
        <div
          className={"djkjaksjkajraeaw"}
          style={{
            position: "absolute",
            bottom: 0,
            textAlign: "center",
            fontSize: 12,
            fontWeight: 600,
            width: "100%",
          }}
        >
          Vui lòng đăng tải 5 hình ảnh
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 16,
        }}
      >
      </div>
    </div>
  )
}