import React, { Component } from "react";
import "./ReliableMLWithUnreliableBlackBoxes.css";

import scribeTemplate from "./files/scribe-notes-template.tex";
import scribe1 from "./files/lecture1-scribe.pdf";
import scribe2 from "./files/lecture2-scribe.pdf";

class ReliableMLWithUnreliableBlackBoxes extends Component {


    render () {

        var courseSchedule = 
            <table >
                <colgroup>
                    <col style={{width: "15%"}}/>
                    <col style={{width: "55%"}}/>
                    <col style={{width: "30%"}}/>
                </colgroup>
                <tbody>
                    <tr key="1">
                        <td>Thu, Apr 2</td>
                        <td>
                            (Lecture) <b>Course Introduction</b>
                            <ul>
                                <li>What is a black box model?</li>
                                <li>What is reliability?</li>
                                <li>Sample topics</li>
                            </ul>
                        </td>
                        <td>
                            <p><a href={scribe1}>[Lecture 1 scribe notes, thanks Eiko Reisz!]</a></p>

                            <p><span class="due">Due 7 days from assigned scribe lecture:</span> Scribe notes, in LaTex 
                            with <a href={scribeTemplate}>this template</a>, to be turned in via email with the raw 
                            LaTeX file.  See below for details.  If you have never used LaTeX before, please 
                            see <a href="https://www.overleaf.com/learn/latex/Learn_LaTeX_in_30_minutes">this tutorial</a></p>
                        </td>
                    </tr>

                    <tr key="2">
                        <td>Tue, Apr 7</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 1</b>
                            <ul>
                                <li>Prediction problems</li>
                                <li>Approaches in practice</li>
                                <li>Classical statistical approaches: holdout/calibration sets</li>
                                <li>Quantiles</li>
                                <li>Conformal prediction and exchangeable data</li>
                            </ul>
                        </td>
                        <td>
                            <p><a href={scribe2}>[Lecture 2 scribe notes, thanks Matthew vonAllmen!]</a></p>
                        </td>
                    </tr>

                    <tr key="3">
                        <td>Thu, Apr 9</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 2</b>
                        </td>
                        <td>
                            <p><span className="scribe">Scribe:</span> Dionysis Arvanitakis</p>
                        </td>
                    </tr>

                    <tr key="4">
                        <td>Tue Apr 14</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 3</b>
                        </td>
                        <td>
                            <p><span class="due">Due by beginning of class:</span> Form due to sign up for 
                            projects/presentations and scribe notes</p>

                            <p><span className="scribe">Scribe:</span> Joe Kook</p>
                        </td>
                    </tr>

                    <tr key="5">
                        <td>Thu, Apr 16</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 4</b>
                        </td>
                        <td>
                            <p><span className="scribe">Scribe:</span> Tanmay Sinha</p>
                        </td>
                    </tr>

                    <tr key="6">
                        <td>Tue Apr 21</td>
                        <td>
                            (Lecture) <b>Uncertainty Quantification Day 5</b>
                        </td>
                        <td>
                            <p><span className="scribe">Scribe:</span> Hongyu Chen</p>
                        </td>
                    </tr>

                    <tr key="7">
                        <td>Thu, Apr 23</td>
                        <td>
                            (Student Presentation) <b>UQ Day 6</b>
                            <ul>
                                <li>Joe Kook on <a href="https://arxiv.org/abs/2301.09633">[ABFJZ23]</a> Prediction 
                                powered inference</li>
                                <li>Class discussion on <a href="https://arxiv.org/abs/2502.02561">[KPRH25]</a> Conformal prediction 
                                and risk-aversion</li>
                            </ul>
                        </td>
                        <td>
                            <p><span className="due">Due:</span> read <a href="https://arxiv.org/abs/2502.02561">[KPRH25]</a> in 
                            prep for discussion</p>
                            <p><span className="scribe">Scribe:</span> Huaman Sun</p>
                        </td>
                    </tr>

                    <tr key="8">
                        <td>Tue Apr 28</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="9">
                        <td>Thu, Apr 30</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="10">
                        <td>Tue, May 5</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="11">
                        <td>Thu, May 7</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="12">
                        <td>Tue, May 12</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="13">
                        <td>Thu, May 14</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="14">
                        <td>Tue, May 19</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="15">
                        <td>Thu, May 21</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="16">
                        <td>Tue, May 26</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="17">
                        <td>Thu, May 28</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="18">
                        <td>Tue, Jun 2</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="19">
                        <td>Thu, Jun 4</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>

                    <tr key="20">
                        <td>Thu, Jun 9</td>
                        <td>Stuff we're doing today</td>
                        <td>Stuff that's due</td>
                    </tr>
                </tbody>
            </table>;



        return (
            <div className="background-box"> 
            <div className="inner-wrapper">
                
                <div className="header">
                    <h1>Reliable Machine Learning with Unreliable Black Box Models</h1>
                    <h3>Spring 2026 course at Northwestern University</h3>
                    <h3>Meets: Tu/Thu 9:30-10:50am, Tech A110</h3>
                    <h3>Instructors: <a href="https://users.cs.northwestern.edu/~aravindv/">Aravindan Vijayaraghavan</a> and <a href="https://vaidehi8913.github.io/">Vaidehi Srinivas</a></h3>
                </div>

                <div className="info-block">
                    <h3>Description</h3>

                    <p>
                        Modern machine learning methods have made huge strides in recent years, in many domains.  
                        Even so, reliability of modern models remains poorly understood.  Models often suffer 
                        from biases, overconfidence, and can fail unpredictably on new unseen data.  As these 
                        models are increasingly used in high-stakes domains such as medicine, policy, self-driving 
                        technology and scientific discovery, establishing principled foundations of when and how 
                        to trust the predictions of these models has become a pressing concern.  Theory offers a 
                        unique foothold for understanding reliability by providing formal guarantees.  However, our 
                        current state of understanding of deep learning and other practical methods is far from being 
                        able to inform us when and why ML models fail, and how to foresee and avoid these failures. 
                    </p>

                    <p>
                        This course will cover new approaches towards statistical and computational foundations for 
                        the reliable use of powerful but opaque modern machine learning models, by treating such models 
                        as black boxes that may be unreliable or trained on mismatched data. 
                    </p>

                    <p>
                        Specific topics include Uncertainty Quantification including approaches like Conformal 
                        Prediction, Algorithms with Predictions and Data-Driven Algorithms, Reliability under 
                        Distribution Shift, Failure of Distributional Assumptions, and connections to Robust Statistics, 
                        and Calibration.
                    </p>
                </div>
                
                <div className="info-block">

                    <h3>Schedule</h3>

                    {courseSchedule}
                </div>

                <div className="spacer"/>
                
            </div>
            </div>
        )
    }

}


export default ReliableMLWithUnreliableBlackBoxes; 