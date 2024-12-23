import Card from "../../common/Card";
import { useState } from "react";
import DefaultButton from "../../common/DefaultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

const FilterRegion = (props) => {

    const { className, placeholder, array, isClick,
        selectedItems, setSelectedItems, getRefreshData
      } = props;

    const [secondClick, setSecondClick] = useState(false);
    const [thirdClick, setThirdClick] = useState(false);
    const [currentName, setCurrentName] = useState();
    const [currentSubName, setCurrentSubName] = useState();

    const filterArray = array;
    const cityName = filterArray.find(value => value.name === currentName)?.name || "시/도 선택"
    const subFilterArray = array.find(value => value.name === currentName)?.subcategories || [];

    const getLocationData = (reset, city, subCity = '', selectedKey = 'location') => {
        setSelectedItems((prevSelectedItems) => {
        //   const locationArray = prevSelectedItems[selectedKey] || [];

          let newLocationArray;

          if (reset) {
            newLocationArray = [];
          } else {

            if (subCity !== '')
                newLocationArray = [city, subCity];
            else newLocationArray = [city];
          }
          
          return {
            ...prevSelectedItems,
            [selectedKey]: newLocationArray
          }
        })
    };

    return (
        <>
        {isClick &&
            <Card className={className}>
                <div className="select-container">
                    <p className="select-label">시/도</p>
                    <div className="button-box">
                        <DefaultButton className="wd100" onClick={() => setSecondClick(!secondClick)}>
                            {cityName === "시/도 선택" ? "시/도 선택" : cityName}
                        </DefaultButton>
                        <DefaultButton className="primary">
                            <FontAwesomeIcon icon={faList}/>
                        </DefaultButton>
                    </div>
                    {secondClick && 
                        <div className="select-list">
                            {filterArray?.map((value, index) => {
                                    return (
                                    <p key={index}
                                        onClick={() => {
                                            setCurrentName(value.name);
                                            getLocationData(false, value.name, '');
                                            getRefreshData();
                                        }}>
                                        {value.name}
                                    </p>
                                    );
                            })}
                        </div>               
                    }
                
                </div>
                <div className="select-container">
                    <p className="select-label">시/군/구</p>
                    <DefaultButton className="primary" onClick={() => setThirdClick(!thirdClick)}>
                        {subFilterArray.find(value => value === currentSubName) ?? "시/군/구 선택"}
                    </DefaultButton>
                    {thirdClick && 
                        <div className="select-list">
                            {subFilterArray?.map((value, index) => {
                                    return (
                                    <p key={index}
                                        onClick={() => {
                                            setCurrentSubName(value);
                                            getLocationData(false, currentName, value);
                                            getRefreshData();
                                        }}>
                                        {value}
                                    </p>
                                    );
                            })}
                        </div>               
                    }
                </div>
                <div>
                    <DefaultButton className="primary">적용</DefaultButton>
                    <DefaultButton className="primary" onClick={() => getLocationData(true)}>초기화</DefaultButton>       
                </div>
            </Card>            
        }
        </>
    )
}

export default FilterRegion;