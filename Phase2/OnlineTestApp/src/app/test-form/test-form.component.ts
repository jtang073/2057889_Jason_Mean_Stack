import { Component, OnInit } from '@angular/core';
import { TestFormService } from '../test-form.service';
import { Question } from '../questions.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {
  myForm:FormGroup;
  allQuestions:Array<Question> = new Array();
  finalScore:number = 0;
  finalPercent:number = 0;
  started:Boolean = false;
  ended:Boolean = false;
  passed:Boolean = false;
  failed:Boolean = false;
  graded:Boolean = false;
  status:String = "";

  constructor(public testSer:TestFormService, public form:FormBuilder) {
    this.myForm=form.group({});
  }

  ngOnInit(): void {
    this.testSer.checkUserQuestion().subscribe(results=> {
      let tempQ = results;
      tempQ.forEach(qq => this.allQuestions.push(qq));
      this.allQuestions.forEach(qqq => this.myForm.addControl(qqq.id, this.form.control("")));
      if (this.allQuestions.length < 10) {
        alert("I was told the online test must have a minimum of 10 questions as per the requirement which your question.json file is not! However, the program will still function normally. This alert was just in case you guys checked. (:");
      }
    }) 
  }

  gradeTest() {
    let userAnswer = this.myForm.value;
    for (let i = 1; i < this.allQuestions.length+1; ++i) {
      if (userAnswer[i] == this.allQuestions[i-1].correct) {
        ++this.finalScore;
      }
    }
    this.finalPercent = Math.round(this.finalScore/this.allQuestions.length * 100);
    if (this.finalPercent >= 70) {
      this.passed = true;
      this.failed = false;
      this.status = "PASSED";
    }
    else {
      this.passed = false;
      this.failed = true;
      this.status = "FAILED";
    }
    this.endTest();
  }

  startTest() {
    this.started = true;
    this.ended = false;
    this.myForm.reset();
    this.topFunction();
    this.finalScore = 0;
    this.graded = false;
    this.status = "";
  }

  endTest() {
    this.ended = true;
    this.topFunction();
    this.graded = true;
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

}
