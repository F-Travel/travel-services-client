import React from 'react'
import { MultilevelMenu } from 'react-multilevel-menu';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import "./AdminLevel1.sass"
import {MdDelete } from "react-icons/md"
import { TiArrowBackOutline} from "react-icons/ti"

const AdminLevel1 = (props) => {
  return (
    <div className={"djsklsjaksjasa"} style={{width: "100%"}}>
        <div className={"sdkljdakldjkas"} style={{width :"100%", display: "flex", justifyContent: 'space-between', gap: 20 }}>
            <Navigation />
            <Main />
        </div>
    </div>
  )
}

const Navigation= ()=> {
    const navigate= useNavigate()
      
      const list = [
        {
            label: 'Danh sách khách sạn',
            items: [
                {
                    label: 'Đã xác thực',
                    faIcon: 'fab fa-accusoft',
                    onSelected: function() {
                        navigate("/manager/hotel/list/verified")
                    }
                },
                {
                    label: 'Chờ xác thực',
                    faIcon: 'fab fa-accessible-icon',
                    onSelected: function() {
                        navigate("/manager/hotel/list/pending")
                    }
                },
                {
                    label: 'Đã bị vô hiệu hóa',
                    faIcon: 'fab fa-accessible-icon',
                    onSelected: function() {
                        navigate("/manager/hotel/list/disabled")
                    }
                }
            ]
        },
        {
            label: 'Comment report',
            onSelected: function() {
                navigate("/manager/comment/reports")
            }
            
        },
        {
            label: 'List sự kiện',
            activeFaIcon: 'fas fa-anchor', 
            onSelected: function() {
                navigate("/manager/events")
            }
        }
    ];
    const configurations = {
        paddingAtStart: true,
        classname: 'my-custom-class',
        fontColor: `rgb(8, 54, 71)`,
        selectedListFontColor: `#2e89ff`,
        highlightOnSelect: true,
        useDividers: false,
        fontWeight: 600
    };
    return (
        <div className={"jaksjakdslkdass"} style={{ background: "#d9d9d9", minHeight: "100%", width: 300}}>
            <div className="app__page-container">
            <MultilevelMenu 
                list={list} 
                configuration={configurations}  
            />
    </div>
        </div>
    )
}

const Main= (props)=> {
    return (
        <div className={"alksjklrjwkeawsa"} style={{flex: "1 1 0"}}>
            <Routes>
                <Route path={"/hotel/list/verified/*"} element={<Verified />} />
                <Route path={"/hotel/list/pending/*"} element={<Pending />} />
                <Route path={"/hotel/list/disabled/*"} element={<Disable />} />
                <Route path={"/comment/reports/*"} element={<CommentsReport />} />
                <Route path={"/events"} element={<ListEvents />} />
                <Route path={"/events/add/new"} element={<AddNewEvent />} />
            </Routes>
        </div>
    )
}

const Verified= (props)=> {
    return (
        <>
            <Title title={"Danh sách khách sạn đang hoạt động"} />
            <MainElementList />
        </>
    )
}

const Pending= (props)=> {
    return (
        <>
            <Title title={"Danh sách khách sạn đang chờ duyệt"} />
            <MainElementList />
        </>
    )
}

const Disable= (props)=> {
    return (
        <>
            <Title title={"Danh sách khách sạn đã bị vô hiệu hóa"} />
            <MainElementList />
        </>
    )
}

const CommentsReport= (props)=> {
    return (
        <>
            <Title title={"List comment bị report"} />
            <MainListCommentReport />
        </>
    )
}

const ListEvents= (props)=> {
    return (
        <>
            <Title title={"List sự kiện"} is_add_event={true} />
            <MainElementEvent />
        </>
    )
}

const AddNewEvent= (props)=> {
    return (
        <>
            <Title title={"Thêm sự kiện"} />
            <MainAddEvent />
        </>
    )
}


const Title= (props)=> {
    const navigate= useNavigate()
    return (
        <div className={"dslksjaklsjklsdjas"} style={{ marginBottom: 16, padding: "0 10px", width: "100%"}}>
            <div className={"jlsjkasjasjksaask"} style={{width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 10, marginBottom: 8, borderBottom: "1px solid #000", paddingTop: 10}}>
                <div className={"djkasjaksjasaas"} style={{fontSize: 20, fontWeight: 600}}>{props.title}</div>
                {
                    props.is_add_event=== true && <button style={{width: 200, height: 50, background: "#2DB83B", color: "#fff", cursor: "pointer", border: "none", outline: "none", display: "flex", justifyContent: 'center', alignItems: "center", fontSize: 18, fontWeight: 600}} onClick={()=> navigate("/manager/events/add/new")}>Thêm</button>
                }
            </div>
        </div>
    )
}

const MainElementEvent= (props)=> {
    return (
        <table className={"jskldjakdjskdalks"} style={{width: "100%", padding: "0 30px", borderSpacing: 10, borderCollapse: "separate"}}>
            <thead className={"jskldjklajsakslas"} style={{width: "100%",paddingBottom: 10, borderBottom: "1px solid #000", paddingLeft: 20, paddingRight: 20}}>
                <th className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Địa điểm</th>
                <th className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Tên sự kiện</th>
                <th className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Nội dung</th>
                <th className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Hình ảnh</th>
                <th className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Hành động</th>
            </thead>
            <tbody style={{width: "100%"}}> 
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
                <tr className={"djskldjaksjakass"} style={{width: "100%", padding: "10px 20px", marginBottom: 16}}>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Đà Nẵng</td>
                    <td className={"djsjaksjaksjska"} style={{fontSize: 16, textAlign: "center"}}>Cầu Rồng Phun Lửa</td>
                    <td className={"akljkdsjklfdajkd"} style={{fontSize: 16, textAlign: "center"}}>Vào thứ 3, thứ 7 hàng tuần, cầu Rồng phun lửa</td>
                    <td className={"dsjkdjkasjaskassa"} style={{textAlign: "center"}}>
                        <p className={"djkasjaksjasksa"} style={{width: "100%", height: "auto", aspectRatio: 8 / 5, background: "#d9d9d9"}} role={"img"}></p>
                    </td>
                    <td className={"jdksdjaksjkasasas"} style={{textAlign: "center", verticalAlign: "middle"}}>
                        <button className={"jkldjkldsjksakas"} style={{color: "#fff", backgroundColor: "red", width: 60, height: 30, border: "none", outline: "none", cursor: "pointer"}}>
                            Xóa
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

const MainElementList= (props)=> {
    return (
        <div className={"jskldjakdjskdalks"} style={{width: "100%", display: "flex", alignItems: 'center', flexWrap: "wrap"}}>
            <div className={"jdfljdkalsdasa "} style={{width: "calc(100% / 3)", padding: 10}}>
                <div className={"jlkdjkasdjkasas"} style={{width: "100%", padding: 10, background: "#d9d9d9"}}>
                    <div className={"kssjkajskasaas"} style={{width: "100%", display :"flex" , justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                        <div className='dhsdljajskljassa'>
                            <div className='sljflkjeklasjas' style={{fontSize: 18, fontWeight: 600, color: "#2e89fff", marginBottom: 12}}>Tên khách sạn</div>
                            <div className='djasjklasjklasjas' style={{color: "#2e89ff", fontSize: 14, }}>
                                Địa chỉ
                            </div>
                        </div>
                        <div className={"fjhlksjlkasjassasa"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                            <MdDelete style={{width: 36, height: 36}} />
                        </div>
                    </div>
                    {/*  */}
                    <div className={"djklsjdaksjkfsad"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", marginBottom: 16}}>
                        <div className={"jlkdsjakjskassaas"} style={{fontSize: 18, fontWeight: 600}}>
                            Số phòng
                        </div>
                        <div className={"jklsjaksjkasaas"} style={{fontSize: 16, fontWeight: 600}}>
                            Số điện thoại
                        </div>
                    </div>
                    <div className={"jlksjaklsjkajakssa"} style={{width: "100%", marginBottom: 16}}>
                        <div className={"fjskldjaksjaksaas"} style={{width: "100%", aspectRatio: 8 / 5, height: "auto", background: "#fff"}}></div>
                    </div>
                    <div className={"djksjklsajklasjklsa"}>
                        <div className={"fklsjaklsjaklsjasa"} style={{fontSize: 18, fontWeight: 600}}>
                            Giá tiền: 
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={"jdfljdkalsdasa "} style={{width: "calc(100% / 3)", padding: 10}}>
                <div className={"jlkdjkasdjkasas"} style={{width: "100%", padding: 10, background: "#d9d9d9"}}>
                    <div className={"kssjkajskasaas"} style={{width: "100%", display :"flex" , justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                        <div className='dhsdljajskljassa'>
                            <div className='sljflkjeklasjas' style={{fontSize: 18, fontWeight: 600, color: "#2e89fff", marginBottom: 12}}>Tên khách sạn</div>
                            <div className='djasjklasjklasjas' style={{color: "#2e89ff", fontSize: 14, }}>
                                Địa chỉ
                            </div>
                        </div>
                        <div className={"fjhlksjlkasjassasa"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                            <MdDelete style={{width: 36, height: 36}} />
                        </div>
                    </div>
                    {/*  */}
                    <div className={"djklsjdaksjkfsad"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", marginBottom: 16}}>
                        <div className={"jlkdsjakjskassaas"} style={{fontSize: 18, fontWeight: 600}}>
                            Số phòng
                        </div>
                        <div className={"jklsjaksjkasaas"} style={{fontSize: 16, fontWeight: 600}}>
                            Số điện thoại
                        </div>
                    </div>
                    <div className={"jlksjaklsjkajakssa"} style={{width: "100%", marginBottom: 16}}>
                        <div className={"fjskldjaksjaksaas"} style={{width: "100%", aspectRatio: 8 / 5, height: "auto", background: "#fff"}}></div>
                    </div>
                    <div className={"djksjklsajklasjklsa"}>
                        <div className={"fklsjaklsjaklsjasa"} style={{fontSize: 18, fontWeight: 600}}>
                            Giá tiền: 
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={"jdfljdkalsdasa "} style={{width: "calc(100% / 3)", padding: 10}}>
                <div className={"jlkdjkasdjkasas"} style={{width: "100%", padding: 10, background: "#d9d9d9"}}>
                    <div className={"kssjkajskasaas"} style={{width: "100%", display :"flex" , justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                        <div className='dhsdljajskljassa'>
                            <div className='sljflkjeklasjas' style={{fontSize: 18, fontWeight: 600, color: "#2e89fff", marginBottom: 12}}>Tên khách sạn</div>
                            <div className='djasjklasjklasjas' style={{color: "#2e89ff", fontSize: 14, }}>
                                Địa chỉ
                            </div>
                        </div>
                        <div className={"fjhlksjlkasjassasa"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center"}}>
                            <MdDelete style={{width: 36, height: 36}} />
                        </div>
                    </div>
                    {/*  */}
                    <div className={"djklsjdaksjkfsad"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", marginBottom: 16}}>
                        <div className={"jlkdsjakjskassaas"} style={{fontSize: 18, fontWeight: 600}}>
                            Số phòng
                        </div>
                        <div className={"jklsjaksjkasaas"} style={{fontSize: 16, fontWeight: 600}}>
                            Số điện thoại
                        </div>
                    </div>
                    <div className={"jlksjaklsjkajakssa"} style={{width: "100%", marginBottom: 16}}>
                        <div className={"fjskldjaksjaksaas"} style={{width: "100%", aspectRatio: 8 / 5, height: "auto", background: "#fff"}}></div>
                    </div>
                    <div className={"djksjklsajklasjklsa"}>
                        <div className={"fklsjaklsjaklsjasa"} style={{fontSize: 18, fontWeight: 600}}>
                            Giá tiền: 
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={"jdfljdkalsdasa "} style={{width: "calc(100% / 3)", padding: 10}}>
                <div className={"jlkdjkasdjkasas"} style={{width: "100%", padding: 10, background: "#d9d9d9"}}>
                    <div className={"kssjkajskasaas"} style={{width: "100%", display :"flex" , justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                        <div className='dhsdljajskljassa'>
                            <div className='sljflkjeklasjas' style={{fontSize: 18, fontWeight: 600, color: "#2e89fff", marginBottom: 12}}>Tên khách sạn</div>
                            <div className='djasjklasjklasjas' style={{color: "#2e89ff", fontSize: 14, }}>
                                Địa chỉ
                            </div>
                        </div>
                        <div className={"fjhlksjlkasjassasa"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                            <MdDelete style={{width: 36, height: 36}} />
                        </div>
                    </div>
                    {/*  */}
                    <div className={"djklsjdaksjkfsad"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", marginBottom: 16}}>
                        <div className={"jlkdsjakjskassaas"} style={{fontSize: 18, fontWeight: 600}}>
                            Số phòng
                        </div>
                        <div className={"jklsjaksjkasaas"} style={{fontSize: 16, fontWeight: 600}}>
                            Số điện thoại
                        </div>
                    </div>
                    <div className={"jlksjaklsjkajakssa"} style={{width: "100%", marginBottom: 16}}>
                        <div className={"fjskldjaksjaksaas"} style={{width: "100%", aspectRatio: 8 / 5, height: "auto", background: "#fff"}}></div>
                    </div>
                    <div className={"djksjklsajklasjklsa"}>
                        <div className={"fklsjaklsjaklsjasa"} style={{fontSize: 18, fontWeight: 600}}>
                            Giá tiền: 
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={"jdfljdkalsdasa "} style={{width: "calc(100% / 3)", padding: 10}}>
                <div className={"jlkdjkasdjkasas"} style={{width: "100%", padding: 10, background: "#d9d9d9"}}>
                    <div className={"kssjkajskasaas"} style={{width: "100%", display :"flex" , justifyContent: 'space-between', alignItems: 'center', marginBottom: 16}}>
                        <div className='dhsdljajskljassa'>
                            <div className='sljflkjeklasjas' style={{fontSize: 18, fontWeight: 600, color: "#2e89fff", marginBottom: 12}}>Tên khách sạn</div>
                            <div className='djasjklasjklasjas' style={{color: "#2e89ff", fontSize: 14, }}>
                                Địa chỉ
                            </div>
                        </div>
                        <div className={"fjhlksjlkasjassasa"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                            <MdDelete style={{width: 36, height: 36}} />
                        </div>
                    </div>
                    {/*  */}
                    <div className={"djklsjdaksjkfsad"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", marginBottom: 16}}>
                        <div className={"jlkdsjakjskassaas"} style={{fontSize: 18, fontWeight: 600}}>
                            Số phòng
                        </div>
                        <div className={"jklsjaksjkasaas"} style={{fontSize: 16, fontWeight: 600}}>
                            Số điện thoại
                        </div>
                    </div>
                    <div className={"jlksjaklsjkajakssa"} style={{width: "100%", marginBottom: 16}}>
                        <div className={"fjskldjaksjaksaas"} style={{width: "100%", aspectRatio: 8 / 5, height: "auto", background: "#fff"}}></div>
                    </div>
                    <div className={"djksjklsajklasjklsa"}>
                        <div className={"fklsjaklsjaklsjasa"} style={{fontSize: 18, fontWeight: 600}}>
                            Giá tiền: 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const MainListCommentReport= (props)=> {
    return (
        <div className={"djlksjkljdksdasas"} style={{marginTop: 20, width: "100%", padding: "0 30px"}}>
            <div className={"jskldjklajsakslas"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", paddingBottom: 10, borderBottom: "1px solid #000", paddingLeft: 20, paddingRight: 20}}>
                <div className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Tên người dùng</div>
                <div className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Comment bị report</div>
                <div className={"djlasjkjddaksa"} style={{fontSize: 18, fontWeight: 600}}>Hành động</div>
            </div>
            {/*  */}
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                </div> 
            </div>
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                </div> 
            </div>
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                </div> 
            </div>
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                </div> 
            </div>
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                </div> 
            </div>
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                </div> 
            </div>
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                </div> 
            </div>
            <div className={"djskldjaksjakass"} style={{width: "100%", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "10px 20px", marginBottom: 16}}>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600}}>Nguyễn Văn A</div>
                <div className={"jkdsjaklsjkalej"} style={{fontSize: 18, fontWeight: 600}}>Má khách sạn làm ăn như ***</div>
                <div className={"sdnajksjsjaksas"} style={{fontSize: 18, fontWeight: 600, display: "flex", justifyContent: 'center', alignItems: "center", gap: 20, }}>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <MdDelete style={{width: 36, height: 36}} />
                    </div>
                    <div className={"kdalkdjkawjwkawe"} style={{display: "flex", justifyContent: 'center', alignItems: "center"}}>
                        <TiArrowBackOutline style={{width: 36, height: 36, color: "green", fill: "green"}} />
                    </div>
                </div> 
            </div>
        </div> 
    )
}

const MainAddEvent= (props)=> {
    return (
        <div className={"fsjkdjksdjsdkaas"} style={{width: "100%", padding: "30px"}}>
            <div className={"djslkdjkasjkaskjas"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 30, width: "100%", maxWidth: 600, marginBottom: 20}}>
                <div className={"dskjdaksjaskasjksa"} style={{fontSize: 24, fontWeight: 600}}>
                    Địa điểm
                </div>
                <div className={"jdfskldjakjsakdas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <input type="text" style={{width: 400, height: 60, padding: 10, background: "#d9d9d9", border: "none"}} />
                </div>
            </div>
            <div className={"djslkdjkasjkaskjas"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 30, width: "100%", maxWidth: 600, marginBottom: 20}}>
                <div className={"dskjdaksjaskasjksa"} style={{fontSize: 24, fontWeight: 600}}>
                    Tên sự kiện
                </div>
                <div className={"jdfskldjakjsakdas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <input type="text" style={{width: 400, height: 60, padding: 10, background: "#d9d9d9", border: "none"}} />
                </div>
            </div>
            <div className={"djslkdjkasjkaskjas"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 30, width: "100%", maxWidth: 600, marginBottom: 20}}>
                <div className={"dskjdaksjaskasjksa"} style={{fontSize: 24, fontWeight: 600}}>
                    Nội dung
                </div>
                <div className={"jdfskldjakjsakdas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <input type="text" style={{width: 400, height: 60, padding: 10, background: "#d9d9d9", border: "none"}} />
                </div>
            </div>
            <div className={"djslkdjkasjkaskjas"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 30, width: "100%", maxWidth: 600, marginBottom: 20}}>
                <div className={"dskjdaksjaskasjksa"} style={{fontSize: 24, fontWeight: 600}}>
                    Hình ảnh
                </div>
                <div className={"jdfskldjakjsakdas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <div className={"fioeujioasujsd"} style={{width: 400, height: 250, background: "#d9d9d9", display: "flex", justifyContent: 'center', alignItems :"center"}}>
                        <button style={{width: 150, height: 50, padding: 10, background: "#C311E0", border: "none", color: "#000", fontWeight: 600, display: "flex", justifyContent: 'center', alignItems:"center", cursor: "pointer"}}>Thêm ảnh</button>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className={"djslkdjkasjkaskjas"} style={{display: "flex", justifyContent: 'space-between', alignItems: "center", gap: 30, width: "100%", maxWidth: 600, marginTop: 20, flexDirection: "row-reverse"}}>
                <div className={"jdfskldjakjsakdas"} style={{display: "flex", justifyContent: 'center', alignItems: 'center'}}>
                    <div className={"fioeujioasujsd"} style={{width: 400, display: "flex", justifyContent: 'center', alignItems :"center"}}>
                        <button style={{width: 200, height: 60, padding: 10, background: "#2DB83B", border: "none", color: "#000", fontWeight: 600, display: "flex", justifyContent: 'center', alignItems:"center", cursor: "pointer", fontSize: 18}}>Lưu </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminLevel1