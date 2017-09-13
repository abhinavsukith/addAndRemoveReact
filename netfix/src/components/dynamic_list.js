import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import "../style.css";
export default List;

function List(props){

const myList = props.movieList.mylist.map((val) =>


    <div key ={val.id}  className="repeater" >
      <div >
  		<img  src={val.img}  />

			<h6 >{val.title}</h6>

      <button  className="btn btn-danger"  onClick={() => props.remove(val.id)} >Remove</button>
  		</div>
	</div>

  );

const 	myRecoms = props.movieList.recommendations.map((val) =>
    <div  key ={val.id} className="repeater">

     	<img  src={val.img} alt="Card image cap" />

			<h6 >{val.title}</h6>

      <button className="btn btn-primary" onClick={() => props.add(val.id,val.title,val.img)}>Add</button>


    </div>

  );

const myTitles = props.movieList.mylist.map((val) =>
    <div key ={val.id}  className="myListdiv">
      <div >
			<span >{val.title}</span>
      </div>
</div>
);

  return (
	<div>
    	<div>
    	<h1 >My List</h1>
		    {myList}
    	</div>


		<div id="clear">
    <h1>My Recommendations</h1>
		{myRecoms}
		</div>
    <div id="clear">
    {myTitles}
    </div>
	</div>
  );
}
