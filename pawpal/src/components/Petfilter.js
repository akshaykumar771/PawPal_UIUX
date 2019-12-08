import React from "react";

export default function Petfilter({ petfilter }) {
    return (
        <div className="col-md-12">
            <div className="col-md-3">
                <div class="form-group">
                    <label for="pettype">Cat or Dog ?</label>
                    <select class="form-control">
                    <option>Cat</option>
                    <option>Dog</option>
                    </select>
                </div>
            </div>
        </div>
    );
}