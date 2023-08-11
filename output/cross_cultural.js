function cross_cultural(_topFrame,_libraryPath,_codebasePath, _inputParameters) {
  var _model = EJSS_CORE.createAnimationLMS();
  var _view;
  var _isPlaying = false;
  var _isPaused = true;
  var _isMobile = (navigator===undefined) ? false : navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);

var _stringProperties = {};
  var _tools = EJSS_CORE.Tools;
  function _play()  { _isPaused = false; _isPlaying = true;  _model.play();  }
  function _pause() { _isPaused = true;  _isPlaying = false; _model.pause(); }
  function _step()  { _pause();  _model.step(); }
  function _reset() { _model.reset();  _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); }
  _model._play  = _play;
  _model._pause = _pause;
  _model._step  = _step;
  _model._reset = _reset;
  function _update() { _model.update(); }
  function _initialize() { _model.initialize(); }
  function _setFPS(_fps) { _model.setFPS(_fps); }
  function _setDelay(_delay) { _model.setDelay(_delay); }
  function _setStepsPerDisplay(_spd) { _model.setStepsPerDisplay(_spd); }
  function _setUpdateView(_updateView) { _model.setUpdateView(_updateView); }
  function _setAutoplay(_auto) { _model.setAutoplay(_auto); }
  function _println(_message) { console.log(_message); }

  function _breakAfterThisPage() { _model.setShouldBreak(true); }

  function _resetSolvers() { if (_model.resetSolvers) _model.resetSolvers(); }

  function _saveText(name,type,content) { if (_model.saveText) _model.saveText(name,type,content); }

  function _saveState(name) { if (_model.saveState) _model.saveState(name); }

  function _saveImage(name,panelname) { if (_model.saveImage) _model.saveImage(name,panelname); }

  function _readState(url,type) { if (_model.readState) _model.readState(url,type); }

  function _readText(url,type,varname) { if (_model.readText) _model.readText(url,type,varname); }

  function _getStringProperty(propertyName) {
    var _value = _stringProperties[propertyName];
    if (_value===undefined) return propertyName;
    else return _value;
  }
  var __pagesEnabled = [];
  function _setPageEnabled(pageName,enabled) { __pagesEnabled[pageName] = enabled; }

  var currentStage; // EjsS Model.Variables.game.currentStage
  var currentPage; // EjsS Model.Variables.game.currentPage
  var progressPercentage; // EjsS Model.Variables.game.progressPercentage
  var isGameInProgress; // EjsS Model.Variables.game.isGameInProgress
  var hasGameEnded; // EjsS Model.Variables.game.hasGameEnded

  var religionImageSelected; // EjsS Model.Variables.religion.religionImageSelected
  var religionNameSelected; // EjsS Model.Variables.religion.religionNameSelected
  var areCardsMatched; // EjsS Model.Variables.religion.areCardsMatched
  var questionNumbers; // EjsS Model.Variables.religion.questionNumbers
  var questionAttempts; // EjsS Model.Variables.religion.questionAttempts

  _model.getOdes = function() { return []; };

  _model.removeEvents = function(){
  };

  function _serialize() { return _model.serialize(); }

  _model._userSerialize = function() {
    return {
      currentStage : currentStage,
      currentPage : currentPage,
      progressPercentage : progressPercentage,
      isGameInProgress : isGameInProgress,
      hasGameEnded : hasGameEnded,
      religionImageSelected : religionImageSelected,
      religionNameSelected : religionNameSelected,
      areCardsMatched : areCardsMatched,
      questionNumbers : questionNumbers,
      questionAttempts : questionAttempts
    };
  };

  _model._readParameters = function(json) {
    if(typeof json.currentStage != "undefined") currentStage = json.currentStage;
    if(typeof json.currentPage != "undefined") currentPage = json.currentPage;
    if(typeof json.progressPercentage != "undefined") progressPercentage = json.progressPercentage;
    if(typeof json.isGameInProgress != "undefined") isGameInProgress = json.isGameInProgress;
    if(typeof json.hasGameEnded != "undefined") hasGameEnded = json.hasGameEnded;
    if(typeof json.religionImageSelected != "undefined") religionImageSelected = json.religionImageSelected;
    if(typeof json.religionNameSelected != "undefined") religionNameSelected = json.religionNameSelected;
    if(typeof json.areCardsMatched != "undefined") areCardsMatched = json.areCardsMatched;
    if(typeof json.questionNumbers != "undefined") questionNumbers = json.questionNumbers;
    if(typeof json.questionAttempts != "undefined") questionAttempts = json.questionAttempts;
  };

  function _unserialize(json) { return _model.unserialize(json); }

  _model.addToReset(function() {
    __pagesEnabled["init"] = true;
  });

  _model.addToReset(function() {
    currentStage = 1; // EjsS Model.Variables.game.currentStage
    currentPage = "introduction"; // EjsS Model.Variables.game.currentPage
    progressPercentage = 0; // EjsS Model.Variables.game.progressPercentage
    isGameInProgress = false; // EjsS Model.Variables.game.isGameInProgress
    hasGameEnded = false; // EjsS Model.Variables.game.hasGameEnded
  });

  _model.addToReset(function() {
    religionImageSelected = ""; // EjsS Model.Variables.religion.religionImageSelected
    religionNameSelected = ""; // EjsS Model.Variables.religion.religionNameSelected
    areCardsMatched = { 		hinduism: false, 		judaism: false, 		zoroastrian: false, 		buddhism: false, 		taoism: false, 		jainism: false, 		christianity: false, 		islam: false, 		sikhism: false, 		bahai: false, 	}; // EjsS Model.Variables.religion.areCardsMatched
    questionNumbers = { 		hinduism: 3, 		judaism: 1, 		zoroastrian: 2, 		buddhism: 6, 		taoism: 5, 		jainism: 4, 		christianity: 10, 		islam: 9, 		sikhism: 7, 		bahai: 8, 	}; // EjsS Model.Variables.religion.questionNumbers
    questionAttempts = { 		hinduism: 1, 		judaism: 1, 		zoroastrian: 1, 		buddhism: 1, 		taoism: 1, 		jainism: 1, 		christianity: 1, 		islam: 1, 		sikhism: 1, 		bahai: 1 	}; // EjsS Model.Variables.religion.questionAttempts
  });

  if (_inputParameters) {
    _inputParameters = _model.parseInputParameters(_inputParameters);
    if (_inputParameters) _model.addToReset(function() { _model._readParameters(_inputParameters); });
  }

  _model.addToReset(function() {
    _model.setAutoplay(false);
    _model.setFPS(100);
    _model.setStepsPerDisplay(1);
  });

  // Assume ECMAScript 6; Chrome >=49, Edge >=14, Firefox >=41, Opera >=36, Safari >=8  // > CustomCode.MoodleDataAnalyticsLibrary:1
  // code repository: https://github.com/lookang/codesforejss/blob/master/assessment/questionLib.js  // > CustomCode.MoodleDataAnalyticsLibrary:2
  // documentation: https://weelookang.blogspot.com/2022/11/questionlibjsmakeassessmentjsonpy.html  // > CustomCode.MoodleDataAnalyticsLibrary:3
  const debugMode = true;  // > CustomCode.MoodleDataAnalyticsLibrary:4
  const _questionLib = {};  // > CustomCode.MoodleDataAnalyticsLibrary:5
  _questionLib.stack = [];  // > CustomCode.MoodleDataAnalyticsLibrary:6
  _questionLib.history = Object.create(null);  // > CustomCode.MoodleDataAnalyticsLibrary:7
  _questionLib.questionMarksAwarded = Object.create(null);  // > CustomCode.MoodleDataAnalyticsLibrary:8
  const _nullFunction = debugMode ?  // > CustomCode.MoodleDataAnalyticsLibrary:9
    console.log  // > CustomCode.MoodleDataAnalyticsLibrary:10
    :  // > CustomCode.MoodleDataAnalyticsLibrary:11
    function(){};  // > CustomCode.MoodleDataAnalyticsLibrary:12
  function _debugPrint(msg) {  // > CustomCode.MoodleDataAnalyticsLibrary:13
    if (debugMode) {  // > CustomCode.MoodleDataAnalyticsLibrary:14
      console.log(msg);  // > CustomCode.MoodleDataAnalyticsLibrary:15
    }  // > CustomCode.MoodleDataAnalyticsLibrary:16
  }  // > CustomCode.MoodleDataAnalyticsLibrary:17
  function _getCurrentQuestion() {  // > CustomCode.MoodleDataAnalyticsLibrary:18
    if (!isQuestionStarted()) {  // > CustomCode.MoodleDataAnalyticsLibrary:19
      return null;  // > CustomCode.MoodleDataAnalyticsLibrary:20
    }  // > CustomCode.MoodleDataAnalyticsLibrary:21
    return _questionLib.stack[_questionLib.stack.length - 1];  // > CustomCode.MoodleDataAnalyticsLibrary:22
  }  // > CustomCode.MoodleDataAnalyticsLibrary:23
  function isQuestionStarted() {  // > CustomCode.MoodleDataAnalyticsLibrary:24
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:25
     * Use this function to determine whether a question is pending (has started but has not ended).  // > CustomCode.MoodleDataAnalyticsLibrary:26
     *   // > CustomCode.MoodleDataAnalyticsLibrary:27
     * No Parameters  // > CustomCode.MoodleDataAnalyticsLibrary:28
     *  // > CustomCode.MoodleDataAnalyticsLibrary:29
     * return value:  // > CustomCode.MoodleDataAnalyticsLibrary:30
     * Boolean  // > CustomCode.MoodleDataAnalyticsLibrary:31
     */  // > CustomCode.MoodleDataAnalyticsLibrary:32
    return _questionLib.stack.length > 0;  // > CustomCode.MoodleDataAnalyticsLibrary:33
  }  // > CustomCode.MoodleDataAnalyticsLibrary:34
  // for assessment.json event - start  // > CustomCode.MoodleDataAnalyticsLibrary:35
  function startQuestion(questionName) {  // > CustomCode.MoodleDataAnalyticsLibrary:36
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:37
     * This function should be called whenever the student first sees the question,   // > CustomCode.MoodleDataAnalyticsLibrary:38
     * and the student cannot start answering any other question. The question may be subsequently   // > CustomCode.MoodleDataAnalyticsLibrary:39
     * ended by calling endQuestion function.  // > CustomCode.MoodleDataAnalyticsLibrary:40
     *   // > CustomCode.MoodleDataAnalyticsLibrary:41
     * Parameters:  // > CustomCode.MoodleDataAnalyticsLibrary:42
     * questionName: string  // > CustomCode.MoodleDataAnalyticsLibrary:43
     *  // > CustomCode.MoodleDataAnalyticsLibrary:44
     * return value:  // > CustomCode.MoodleDataAnalyticsLibrary:45
     * undefined  // > CustomCode.MoodleDataAnalyticsLibrary:46
     */  // > CustomCode.MoodleDataAnalyticsLibrary:47
    _view._addInteraction(_nullFunction, {action:"questionStart", name:questionName}, {element:"questionLib", property:"value"});  // > CustomCode.MoodleDataAnalyticsLibrary:48
    _debugPrint("Start question: " + questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:49
      // > CustomCode.MoodleDataAnalyticsLibrary:50
    _questionLib.stack.push(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:51
  }  // > CustomCode.MoodleDataAnalyticsLibrary:52
  // for assessment.json event - end  // > CustomCode.MoodleDataAnalyticsLibrary:53
  function endQuestion() {  // > CustomCode.MoodleDataAnalyticsLibrary:54
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:55
     * This function should be called whenever the student submits/finalises their answer for the question.  // > CustomCode.MoodleDataAnalyticsLibrary:56
     *   // > CustomCode.MoodleDataAnalyticsLibrary:57
     * No Parameters  // > CustomCode.MoodleDataAnalyticsLibrary:58
     *  // > CustomCode.MoodleDataAnalyticsLibrary:59
     * return value:  // > CustomCode.MoodleDataAnalyticsLibrary:60
     * undefined  // > CustomCode.MoodleDataAnalyticsLibrary:61
     */  // > CustomCode.MoodleDataAnalyticsLibrary:62
    if (_questionLib.stack.length > 0) {  // > CustomCode.MoodleDataAnalyticsLibrary:63
      const questionName = _questionLib.stack.pop();  // > CustomCode.MoodleDataAnalyticsLibrary:64
      _debugPrint("End question: " + questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:65
      _view._addInteraction(_nullFunction, {action:"questionEnd", name:questionName}, {element: "questionLib", property: "value"});  // > CustomCode.MoodleDataAnalyticsLibrary:66
    }  // > CustomCode.MoodleDataAnalyticsLibrary:67
  }  // > CustomCode.MoodleDataAnalyticsLibrary:68
  // for assessment.json history  // > CustomCode.MoodleDataAnalyticsLibrary:69
  function addQuestionHistory(history, questionName=null) {  // > CustomCode.MoodleDataAnalyticsLibrary:70
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:71
     * Adds an entry to the question history to the specified question, or to the pending question by default.   // > CustomCode.MoodleDataAnalyticsLibrary:72
     * If adding to the question history of the pending question, it also flushes the history. (which makes Moodle able to read the history)  // > CustomCode.MoodleDataAnalyticsLibrary:73
     *  // > CustomCode.MoodleDataAnalyticsLibrary:74
     * Parameters:  // > CustomCode.MoodleDataAnalyticsLibrary:75
     * history: string, questionName?: string  // > CustomCode.MoodleDataAnalyticsLibrary:76
     *  // > CustomCode.MoodleDataAnalyticsLibrary:77
     * return value:  // > CustomCode.MoodleDataAnalyticsLibrary:78
     * undefined  // > CustomCode.MoodleDataAnalyticsLibrary:79
     *  // > CustomCode.MoodleDataAnalyticsLibrary:80
     * questioName:  // > CustomCode.MoodleDataAnalyticsLibrary:81
     * This is the name of the question that the history will be added to. If this parameter is not set, by default, the history entry  // > CustomCode.MoodleDataAnalyticsLibrary:82
     * will be added to the pending question.  // > CustomCode.MoodleDataAnalyticsLibrary:83
     */  // > CustomCode.MoodleDataAnalyticsLibrary:84
      // > CustomCode.MoodleDataAnalyticsLibrary:85
    if (questionName === null && isQuestionStarted()) {  // > CustomCode.MoodleDataAnalyticsLibrary:86
      questionName = _getCurrentQuestion();  // > CustomCode.MoodleDataAnalyticsLibrary:87
    }  // > CustomCode.MoodleDataAnalyticsLibrary:88
      // > CustomCode.MoodleDataAnalyticsLibrary:89
    if (!(questionName in _questionLib.history)) {  // > CustomCode.MoodleDataAnalyticsLibrary:90
      _debugPrint("Create question history for " + questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:91
        // > CustomCode.MoodleDataAnalyticsLibrary:92
      _questionLib.history[questionName] = [];  // > CustomCode.MoodleDataAnalyticsLibrary:93
    }  // > CustomCode.MoodleDataAnalyticsLibrary:94
    if (debugMode) {  // > CustomCode.MoodleDataAnalyticsLibrary:95
      console.log("Push \"" + history + "\" to question history for " + questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:96
    }  // > CustomCode.MoodleDataAnalyticsLibrary:97
    _questionLib.history[questionName].push(history);  // > CustomCode.MoodleDataAnalyticsLibrary:98
    _flushQuestionHistory(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:99
  }  // > CustomCode.MoodleDataAnalyticsLibrary:100
  function _flushQuestionHistory(questionName) {  // > CustomCode.MoodleDataAnalyticsLibrary:101
    // TODO: check if need to flush  // > CustomCode.MoodleDataAnalyticsLibrary:102
    if (questionName === _getCurrentQuestion()) {  // > CustomCode.MoodleDataAnalyticsLibrary:103
      const outputHistory = _getQuestionHistory(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:104
      _view._addInteraction(_nullFunction, outputHistory, {property: "historyFor" + questionName, element: "questionLib"});  // > CustomCode.MoodleDataAnalyticsLibrary:105
    }  // > CustomCode.MoodleDataAnalyticsLibrary:106
  }  // > CustomCode.MoodleDataAnalyticsLibrary:107
  function _getQuestionHistory(questionName) {  // > CustomCode.MoodleDataAnalyticsLibrary:108
    if (questionName in _questionLib.history) {  // > CustomCode.MoodleDataAnalyticsLibrary:109
      return _questionLib.history[questionName].join("\n");  // > CustomCode.MoodleDataAnalyticsLibrary:110
    } else {  // > CustomCode.MoodleDataAnalyticsLibrary:111
      _debugPrint("No question \"" + questionName + "\" exists");  // > CustomCode.MoodleDataAnalyticsLibrary:112
      return "";  // > CustomCode.MoodleDataAnalyticsLibrary:113
    }  // > CustomCode.MoodleDataAnalyticsLibrary:114
  }  // > CustomCode.MoodleDataAnalyticsLibrary:115
  // for assessment.json event - states  // > CustomCode.MoodleDataAnalyticsLibrary:116
  function onAnswer(answer, isCorrect=false, history=answer, questionName=null) {  // > CustomCode.MoodleDataAnalyticsLibrary:117
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:118
     * Indicates that the student made an attempt to answer the question,   // > CustomCode.MoodleDataAnalyticsLibrary:119
     * writes the history, and adds a log for the submitted answer.   // > CustomCode.MoodleDataAnalyticsLibrary:120
     * However, it does not give marks in itself (that is done by awardQuestionMarks)  // > CustomCode.MoodleDataAnalyticsLibrary:121
     *   // > CustomCode.MoodleDataAnalyticsLibrary:122
     * Parameters:  // > CustomCode.MoodleDataAnalyticsLibrary:123
     * answer: String  // > CustomCode.MoodleDataAnalyticsLibrary:124
     * A string representing what the student chose as the answer to the question.   // > CustomCode.MoodleDataAnalyticsLibrary:125
     * This can be used in an advanced assessment.json generator to check the answers on the server side.  // > CustomCode.MoodleDataAnalyticsLibrary:126
     *  // > CustomCode.MoodleDataAnalyticsLibrary:127
     * isCorrect?: Boolean   // > CustomCode.MoodleDataAnalyticsLibrary:128
     * Whether the student's answer is correct (defaults to false)  // > CustomCode.MoodleDataAnalyticsLibrary:129
     *  // > CustomCode.MoodleDataAnalyticsLibrary:130
     * history: String   // > CustomCode.MoodleDataAnalyticsLibrary:131
     * A textual representation of what the student chose as the answer to the question.   // > CustomCode.MoodleDataAnalyticsLibrary:132
     * By default, this is the same as the value given in the parameter answer.   // > CustomCode.MoodleDataAnalyticsLibrary:133
     * This parameter controls what the teacher will see when they hover their cursor over the student's marks for this question.  // > CustomCode.MoodleDataAnalyticsLibrary:134
     *  // > CustomCode.MoodleDataAnalyticsLibrary:135
     * questionName?: String   // > CustomCode.MoodleDataAnalyticsLibrary:136
     * The name of the question the student is giving an answer to.   // > CustomCode.MoodleDataAnalyticsLibrary:137
     * By default, this is the pending question.   // > CustomCode.MoodleDataAnalyticsLibrary:138
     * However, this can be overridden using this parameter to write the answer history to some other question.  // > CustomCode.MoodleDataAnalyticsLibrary:139
     */  // > CustomCode.MoodleDataAnalyticsLibrary:140
    if (questionName === null && isQuestionStarted()) {  // > CustomCode.MoodleDataAnalyticsLibrary:141
      questionName = _questionLib.stack[_questionLib.stack.length - 1];  // > CustomCode.MoodleDataAnalyticsLibrary:142
    }  // > CustomCode.MoodleDataAnalyticsLibrary:143
    if (questionName !== null) {  // > CustomCode.MoodleDataAnalyticsLibrary:144
      const explainer = Object.create(null);  // > CustomCode.MoodleDataAnalyticsLibrary:145
      explainer[true] = " ✅";  // > CustomCode.MoodleDataAnalyticsLibrary:146
      explainer[false] = " ❌";  // > CustomCode.MoodleDataAnalyticsLibrary:147
      addQuestionHistory(history + explainer[isCorrect], questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:148
      if (questionName === _getCurrentQuestion()) {  // > CustomCode.MoodleDataAnalyticsLibrary:149
        _view._addInteraction(_nullFunction, {name:questionName, answer:answer, isCorrect:isCorrect, action:"questionAnswer"}, {property: "answer", element:"questionLib"});  // > CustomCode.MoodleDataAnalyticsLibrary:150
      }  // > CustomCode.MoodleDataAnalyticsLibrary:151
    }  // > CustomCode.MoodleDataAnalyticsLibrary:152
  }  // > CustomCode.MoodleDataAnalyticsLibrary:153
  // for assessment.json marks  // > CustomCode.MoodleDataAnalyticsLibrary:154
  function awardQuestionMarks(marks=1) {  // > CustomCode.MoodleDataAnalyticsLibrary:155
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:156
     * Awards a number of marks to the student for the pending question.  // > CustomCode.MoodleDataAnalyticsLibrary:157
     *   // > CustomCode.MoodleDataAnalyticsLibrary:158
     * Parameters:  // > CustomCode.MoodleDataAnalyticsLibrary:159
     * marks?: int   // > CustomCode.MoodleDataAnalyticsLibrary:160
     *  // > CustomCode.MoodleDataAnalyticsLibrary:161
     * The number of marks to award to the student. By default, this value is 1.  // > CustomCode.MoodleDataAnalyticsLibrary:162
     */  // > CustomCode.MoodleDataAnalyticsLibrary:163
    if (isQuestionStarted()) {  // > CustomCode.MoodleDataAnalyticsLibrary:164
      const questionName = _getCurrentQuestion();  // > CustomCode.MoodleDataAnalyticsLibrary:165
      _questionLib.questionMarksAwarded[questionName] = 1;  // > CustomCode.MoodleDataAnalyticsLibrary:166
        // > CustomCode.MoodleDataAnalyticsLibrary:167
      for (; _questionLib.questionMarksAwarded[questionName] < marks + 1; _questionLib.questionMarksAwarded[questionName]++) {  // > CustomCode.MoodleDataAnalyticsLibrary:168
        _view._addInteraction(_nullFunction, _questionLib.questionMarksAwarded[questionName], {element:"questionLib", property:"awardMarkFor"+questionName});  // > CustomCode.MoodleDataAnalyticsLibrary:169
      }  // > CustomCode.MoodleDataAnalyticsLibrary:170
    }  // > CustomCode.MoodleDataAnalyticsLibrary:171
  }  // > CustomCode.MoodleDataAnalyticsLibrary:172
  function resetQuestionMarks(questionName) {  // > CustomCode.MoodleDataAnalyticsLibrary:173
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:174
     * Reset the awarded marks for the indicated question to 0 the next time the question is started.  // > CustomCode.MoodleDataAnalyticsLibrary:175
     *   // > CustomCode.MoodleDataAnalyticsLibrary:176
     * Parameters:   // > CustomCode.MoodleDataAnalyticsLibrary:177
     * questionName: string  // > CustomCode.MoodleDataAnalyticsLibrary:178
     *  // > CustomCode.MoodleDataAnalyticsLibrary:179
     * return value:   // > CustomCode.MoodleDataAnalyticsLibrary:180
     * undefined  // > CustomCode.MoodleDataAnalyticsLibrary:181
     *  // > CustomCode.MoodleDataAnalyticsLibrary:182
     * questionName:  // > CustomCode.MoodleDataAnalyticsLibrary:183
     * The name of the question to reset.  // > CustomCode.MoodleDataAnalyticsLibrary:184
     */  // > CustomCode.MoodleDataAnalyticsLibrary:185
    _questionLib.questionMarksAwarded[questionName] = 0;  // > CustomCode.MoodleDataAnalyticsLibrary:186
  }  // > CustomCode.MoodleDataAnalyticsLibrary:187
  function questionInstantMark(questionName, message) {  // > CustomCode.MoodleDataAnalyticsLibrary:188
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:189
     * A convenience function to start a question, award a mark, (optionally) add a history entry, and end the question.  // > CustomCode.MoodleDataAnalyticsLibrary:190
     * This function should be called whenever a student answers a question correctly.  // > CustomCode.MoodleDataAnalyticsLibrary:191
     * It instantly submits the correct answer to the Moodle server, and gives the student a mark.   // > CustomCode.MoodleDataAnalyticsLibrary:192
     * For most cases, this function would suffice.  // > CustomCode.MoodleDataAnalyticsLibrary:193
     *   // > CustomCode.MoodleDataAnalyticsLibrary:194
     * Parameters:   // > CustomCode.MoodleDataAnalyticsLibrary:195
     * questionName: string, message?: string  // > CustomCode.MoodleDataAnalyticsLibrary:196
     *  // > CustomCode.MoodleDataAnalyticsLibrary:197
     * return value:   // > CustomCode.MoodleDataAnalyticsLibrary:198
     * undefined  // > CustomCode.MoodleDataAnalyticsLibrary:199
     *  // > CustomCode.MoodleDataAnalyticsLibrary:200
     * questionName:  // > CustomCode.MoodleDataAnalyticsLibrary:201
     * These values are the names of the questions that will be displayed on the analytics page on Moodle,   // > CustomCode.MoodleDataAnalyticsLibrary:202
     * and they'll be needed when you make the assessment.json file so please remember to note down what   // > CustomCode.MoodleDataAnalyticsLibrary:203
     * values you use for the name of each question.  // > CustomCode.MoodleDataAnalyticsLibrary:204
     *   // > CustomCode.MoodleDataAnalyticsLibrary:205
     * message:   // > CustomCode.MoodleDataAnalyticsLibrary:206
     * What Moodle will display when the teacher hovers their mouse over the student's mark for a particular question.  // > CustomCode.MoodleDataAnalyticsLibrary:207
     */  // > CustomCode.MoodleDataAnalyticsLibrary:208
    startQuestion(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:209
    _debugPrint("" + message);  // > CustomCode.MoodleDataAnalyticsLibrary:210
    if (message) {  // > CustomCode.MoodleDataAnalyticsLibrary:211
      addQuestionHistory(message);  // > CustomCode.MoodleDataAnalyticsLibrary:212
    } else {  // > CustomCode.MoodleDataAnalyticsLibrary:213
      _flushQuestionHistory(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:214
    }  // > CustomCode.MoodleDataAnalyticsLibrary:215
    awardQuestionMarks();  // > CustomCode.MoodleDataAnalyticsLibrary:216
    endQuestion();  // > CustomCode.MoodleDataAnalyticsLibrary:217
  }  // > CustomCode.MoodleDataAnalyticsLibrary:218
  function questionAppendHistory(questionName, message) {  // > CustomCode.MoodleDataAnalyticsLibrary:219
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:220
     * Adds a history entry to the given question.  // > CustomCode.MoodleDataAnalyticsLibrary:221
     *   // > CustomCode.MoodleDataAnalyticsLibrary:222
     * Parameters:   // > CustomCode.MoodleDataAnalyticsLibrary:223
     * questionName: string, message?: string  // > CustomCode.MoodleDataAnalyticsLibrary:224
     *  // > CustomCode.MoodleDataAnalyticsLibrary:225
     * return value:   // > CustomCode.MoodleDataAnalyticsLibrary:226
     * undefined  // > CustomCode.MoodleDataAnalyticsLibrary:227
     *  // > CustomCode.MoodleDataAnalyticsLibrary:228
     * questionName:  // > CustomCode.MoodleDataAnalyticsLibrary:229
     * The name of the question to append the history entry to.  // > CustomCode.MoodleDataAnalyticsLibrary:230
     *   // > CustomCode.MoodleDataAnalyticsLibrary:231
     * message:  // > CustomCode.MoodleDataAnalyticsLibrary:232
     * The history entry to add to the question.  // > CustomCode.MoodleDataAnalyticsLibrary:233
     */  // > CustomCode.MoodleDataAnalyticsLibrary:234
    if (!(questionName in _questionLib.questionMarksAwarded)) {  // > CustomCode.MoodleDataAnalyticsLibrary:235
      _questionLib.questionMarksAwarded[questionName] = 0;  // > CustomCode.MoodleDataAnalyticsLibrary:236
    }  // > CustomCode.MoodleDataAnalyticsLibrary:237
    let shouldPushQuestion = _getCurrentQuestion() !== questionName;  // > CustomCode.MoodleDataAnalyticsLibrary:238
    if (shouldPushQuestion) {  // > CustomCode.MoodleDataAnalyticsLibrary:239
      startQuestion(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:240
    }  // > CustomCode.MoodleDataAnalyticsLibrary:241
    awardQuestionMarks(_questionLib.questionMarksAwarded[questionName])  // > CustomCode.MoodleDataAnalyticsLibrary:242
    addQuestionHistory(message);  // > CustomCode.MoodleDataAnalyticsLibrary:243
    if (shouldPushQuestion) {  // > CustomCode.MoodleDataAnalyticsLibrary:244
      endQuestion();  // > CustomCode.MoodleDataAnalyticsLibrary:245
    }  // > CustomCode.MoodleDataAnalyticsLibrary:246
  }  // > CustomCode.MoodleDataAnalyticsLibrary:247
  function resetQuestionHistory(questionName) {  // > CustomCode.MoodleDataAnalyticsLibrary:248
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:249
     * Clear/reset the history of the indicated question.  // > CustomCode.MoodleDataAnalyticsLibrary:250
     *   // > CustomCode.MoodleDataAnalyticsLibrary:251
     * Parameters:   // > CustomCode.MoodleDataAnalyticsLibrary:252
     * questionName: string  // > CustomCode.MoodleDataAnalyticsLibrary:253
     *  // > CustomCode.MoodleDataAnalyticsLibrary:254
     * return value:   // > CustomCode.MoodleDataAnalyticsLibrary:255
     * undefined  // > CustomCode.MoodleDataAnalyticsLibrary:256
     *  // > CustomCode.MoodleDataAnalyticsLibrary:257
     * questionName:  // > CustomCode.MoodleDataAnalyticsLibrary:258
     * The name of the question to reset.  // > CustomCode.MoodleDataAnalyticsLibrary:259
     */    // > CustomCode.MoodleDataAnalyticsLibrary:260
    _questionLib.history[questionName] = [];  // > CustomCode.MoodleDataAnalyticsLibrary:261
  }  // > CustomCode.MoodleDataAnalyticsLibrary:262
  function resetQuestion(questionName) {  // > CustomCode.MoodleDataAnalyticsLibrary:263
    /*  // > CustomCode.MoodleDataAnalyticsLibrary:264
     * A convenience function to reset the marks and history of an indicated question.  // > CustomCode.MoodleDataAnalyticsLibrary:265
     */    // > CustomCode.MoodleDataAnalyticsLibrary:266
    resetQuestionHistory(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:267
    resetQuestionMarks(questionName);  // > CustomCode.MoodleDataAnalyticsLibrary:268
  }  // > CustomCode.MoodleDataAnalyticsLibrary:269

  function createMatchingFunctionality () {  // > CustomCode.cardMatchingFunctionality:1
    disableRadioButtons(".religion-names input");    // > CustomCode.cardMatchingFunctionality:2
    createReligionImagesFunctionality();  // > CustomCode.cardMatchingFunctionality:3
    createReligionNamesFunctionality();  // > CustomCode.cardMatchingFunctionality:4
  };  // > CustomCode.cardMatchingFunctionality:5
  function createReligionImagesFunctionality () {  // > CustomCode.cardMatchingFunctionality:6
    var cards = document.getElementsByName("card");  // > CustomCode.cardMatchingFunctionality:7
      // > CustomCode.cardMatchingFunctionality:8
    cards.forEach(function (card) {   // > CustomCode.cardMatchingFunctionality:9
      card.addEventListener("change", function () {  // > CustomCode.cardMatchingFunctionality:10
        // isGameInProgress toggled to true to remove finger instruction  // > CustomCode.cardMatchingFunctionality:11
        if (!isGameInProgress) {  // > CustomCode.cardMatchingFunctionality:12
          isGameInProgress = true;   // > CustomCode.cardMatchingFunctionality:13
          _view._update();  // > CustomCode.cardMatchingFunctionality:14
        }  // > CustomCode.cardMatchingFunctionality:15
        religionImageSelected = this.value;  // > CustomCode.cardMatchingFunctionality:16
          // > CustomCode.cardMatchingFunctionality:17
        // allow students to select name radio after selecting a religion picture  // > CustomCode.cardMatchingFunctionality:18
        enableRadioButtons(".religion-labels input");    // > CustomCode.cardMatchingFunctionality:19
      });  // > CustomCode.cardMatchingFunctionality:20
    });   // > CustomCode.cardMatchingFunctionality:21
  }  // > CustomCode.cardMatchingFunctionality:22
  function createReligionNamesFunctionality () {  // > CustomCode.cardMatchingFunctionality:23
      // > CustomCode.cardMatchingFunctionality:24
    var matches = document.getElementsByName("match");  // > CustomCode.cardMatchingFunctionality:25
      // > CustomCode.cardMatchingFunctionality:26
    matches.forEach(function (match) {  // > CustomCode.cardMatchingFunctionality:27
      match.addEventListener("change", function () {  // > CustomCode.cardMatchingFunctionality:28
        religionNameSelected = this.value;  // > CustomCode.cardMatchingFunctionality:29
          // > CustomCode.cardMatchingFunctionality:30
        // prevent students to retry questions that have been answered correctly  // > CustomCode.cardMatchingFunctionality:31
        if (areCardsMatched[religionImageSelected]) {  // > CustomCode.cardMatchingFunctionality:32
          disableRadioButtons(".religion-labels input");  // > CustomCode.cardMatchingFunctionality:33
          unCheckRadioButtons(".religion-pictures input");  // > CustomCode.cardMatchingFunctionality:34
          unCheckRadioButtons(".religion-labels input");   // > CustomCode.cardMatchingFunctionality:35
            // > CustomCode.cardMatchingFunctionality:36
          return;  // > CustomCode.cardMatchingFunctionality:37
        }  // > CustomCode.cardMatchingFunctionality:38
          // > CustomCode.cardMatchingFunctionality:39
        // fires when student answers correctly  // > CustomCode.cardMatchingFunctionality:40
        if (religionImageSelected === religionNameSelected) {  // > CustomCode.cardMatchingFunctionality:41
            areCardsMatched[religionImageSelected] = true;  // > CustomCode.cardMatchingFunctionality:42
            drawConnectorLines(religionNameSelected);  // > CustomCode.cardMatchingFunctionality:43
                      // > CustomCode.cardMatchingFunctionality:44
            // ============= Moodle submission for marks awarded: Begin =============    // > CustomCode.cardMatchingFunctionality:45
            // submit answer to moodle using library for correct matches here.  // > CustomCode.cardMatchingFunctionality:46
              // > CustomCode.cardMatchingFunctionality:47
            let questionName = `Q${questionNumbers[religionImageSelected]}`; // Q1, Q2, etc..  // > CustomCode.cardMatchingFunctionality:48
            startQuestion(questionName);  // > CustomCode.cardMatchingFunctionality:49
            addQuestionHistory("Selected Image: " + religionImageSelected + ", Selected Name: " + religionNameSelected);  // > CustomCode.cardMatchingFunctionality:50
              // > CustomCode.cardMatchingFunctionality:51
            // if it is student's first attempt,  // > CustomCode.cardMatchingFunctionality:52
            if (questionAttempts[religionNameSelected] == 1) {  // > CustomCode.cardMatchingFunctionality:53
              // award 2 mark  // > CustomCode.cardMatchingFunctionality:54
              _println('2 marks awarded for: ' + questionName);  // > CustomCode.cardMatchingFunctionality:55
              awardQuestionMarks(2);              // > CustomCode.cardMatchingFunctionality:56
            } else {  // > CustomCode.cardMatchingFunctionality:57
              // award 1 mark  // > CustomCode.cardMatchingFunctionality:58
              _println('1 marks awarded for: ' + questionName);  // > CustomCode.cardMatchingFunctionality:59
              awardQuestionMarks(1);              // > CustomCode.cardMatchingFunctionality:60
            }       // > CustomCode.cardMatchingFunctionality:61
            endQuestion();  // > CustomCode.cardMatchingFunctionality:62
             // > CustomCode.cardMatchingFunctionality:63
            // ============= Moodle submission for marks awarded: End =============         // > CustomCode.cardMatchingFunctionality:64
              // > CustomCode.cardMatchingFunctionality:65
                      // > CustomCode.cardMatchingFunctionality:66
          // code below runs on correct image - name religion matching  // > CustomCode.cardMatchingFunctionality:67
          _view.correctSound.play();  // > CustomCode.cardMatchingFunctionality:68
            // > CustomCode.cardMatchingFunctionality:69
          let openAprosImage = '<img src="cross_cultural/assets/images/open_apros.svg" alt="open aprostrophy" />';  // > CustomCode.cardMatchingFunctionality:70
          let closeAprosImage = '<img src="cross_cultural/assets/images/close_apros.svg" alt="close aprostrophy" />';  // > CustomCode.cardMatchingFunctionality:71
          // > CustomCode.cardMatchingFunctionality:72
          switch (religionImageSelected) {  // > CustomCode.cardMatchingFunctionality:73
            case "hinduism":  // > CustomCode.cardMatchingFunctionality:74
            updateReligionDescriptionModal('HINDUISM', openAprosImage +  // > CustomCode.cardMatchingFunctionality:75
                                           'The majority of Hindus are vegetarians. Some are non-vegetarians but ' +  // > CustomCode.cardMatchingFunctionality:76
                                           'avoid beef and pork.'+  // > CustomCode.cardMatchingFunctionality:77
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:78
                                             // > CustomCode.cardMatchingFunctionality:79
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:80
            // religion image and name radios remains highlighted pink after a match  // > CustomCode.cardMatchingFunctionality:81
            document.getElementById('hinduismIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:82
            document.getElementById('hinduismText').classList.add('correctly-matched');           // > CustomCode.cardMatchingFunctionality:83
            break;  // > CustomCode.cardMatchingFunctionality:84
            case "judaism":  // > CustomCode.cardMatchingFunctionality:85
            updateReligionDescriptionModal('JUDAISM', openAprosImage +  // > CustomCode.cardMatchingFunctionality:86
                                           'Food that conforms to the Jewish dietary law is called Kosher. Only meals,' +  // > CustomCode.cardMatchingFunctionality:87
                                           'which have been prepared in accordance with the kosher dietary laws,' +  // > CustomCode.cardMatchingFunctionality:88
                                           'should be served. All processed foods such as wine, bread and cheese as '+  // > CustomCode.cardMatchingFunctionality:89
                                           'well as meats must be strictly kosher. Such food is marked with a hechsher '+  // > CustomCode.cardMatchingFunctionality:90
                                           '(Kosher supervision seal), which certifies it as kosher.'+  // > CustomCode.cardMatchingFunctionality:91
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:92
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:93
            document.getElementById('judaismIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:94
            document.getElementById('judaismText').classList.add('correctly-matched');    // > CustomCode.cardMatchingFunctionality:95
            break;  // > CustomCode.cardMatchingFunctionality:96
            case "zoroastrian":  // > CustomCode.cardMatchingFunctionality:97
            updateReligionDescriptionModal('ZOROASTRIANISM', openAprosImage +  // > CustomCode.cardMatchingFunctionality:98
                                           'Zoroastrians have no dietary restrictions. They also do not fast, as the ' +  // > CustomCode.cardMatchingFunctionality:99
                                           'religion teaches them, that the body must be well nourished to be able to ' +  // > CustomCode.cardMatchingFunctionality:100
                                           'work and live a healthy life.' +  // > CustomCode.cardMatchingFunctionality:101
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:102
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:103
            document.getElementById('zoroastrianIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:104
            document.getElementById('zoroastrianText').classList.add('correctly-matched');              // > CustomCode.cardMatchingFunctionality:105
            break;  // > CustomCode.cardMatchingFunctionality:106
            case "buddhism":  // > CustomCode.cardMatchingFunctionality:107
            updateReligionDescriptionModal('BUDDHISM', openAprosImage +   // > CustomCode.cardMatchingFunctionality:108
                                           'A vegetarian diet is promoted especially on the 1st and 15th days of the ' +  // > CustomCode.cardMatchingFunctionality:109
                                           'lunar month for Buddhists. Monks and nuns as well as lay people who have ' +  // > CustomCode.cardMatchingFunctionality:110
                                           'taken the Five Precepts abstain from intoxicants. Monks and nuns in the ' +  // > CustomCode.cardMatchingFunctionality:111
                                           'Chinese Mahayana traditions are vegetarians and the diet is free from ' +  // > CustomCode.cardMatchingFunctionality:112
                                           'garlic, onion, spring onions, leeks, shallots and eggs.' +  // > CustomCode.cardMatchingFunctionality:113
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:114
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:115
            document.getElementById('buddhismIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:116
            document.getElementById('buddhismText').classList.add('correctly-matched');     // > CustomCode.cardMatchingFunctionality:117
            break;  // > CustomCode.cardMatchingFunctionality:118
            case "taoism":  // > CustomCode.cardMatchingFunctionality:119
            updateReligionDescriptionModal('TAOISM', openAprosImage +   // > CustomCode.cardMatchingFunctionality:120
                                           'Taoists are encouraged to observe a vegetarian diet on festive occasions ' +  // > CustomCode.cardMatchingFunctionality:121
                                           'and feast days. Some priests are strict vegetarians and avoid even salt, ' +  // > CustomCode.cardMatchingFunctionality:122
                                           'vinegar, leeks, shallots, garlic and onions during special prayers to ' +  // > CustomCode.cardMatchingFunctionality:123
                                           'celebrate the occasion.' +   // > CustomCode.cardMatchingFunctionality:124
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:125
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:126
            document.getElementById('taoismIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:127
            document.getElementById('taoismText').classList.add('correctly-matched');                // > CustomCode.cardMatchingFunctionality:128
            break;  // > CustomCode.cardMatchingFunctionality:129
            case "jainism":  // > CustomCode.cardMatchingFunctionality:130
            updateReligionDescriptionModal('JAINISM', openAprosImage +   // > CustomCode.cardMatchingFunctionality:131
                                           'Jains are strict vegetarians. Any type of non-vegetarian food is not ' +  // > CustomCode.cardMatchingFunctionality:132
                                           'permitted. On auspicious religious days, Jains also abstain from the ' +  // > CustomCode.cardMatchingFunctionality:133
                                           'consumption of roots of plants. The consumption of alcohol, drugs, and ' +  // > CustomCode.cardMatchingFunctionality:134
                                           'cigarettes are also forbidden. The basis of such a diet is the strong belief of ' +  // > CustomCode.cardMatchingFunctionality:135
                                           'Jains in Ahimsa or non-violence.' +  // > CustomCode.cardMatchingFunctionality:136
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:137
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:138
            document.getElementById('jainismIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:139
            document.getElementById('jainismText').classList.add('correctly-matched');     // > CustomCode.cardMatchingFunctionality:140
            break;  // > CustomCode.cardMatchingFunctionality:141
            case "christianity":  // > CustomCode.cardMatchingFunctionality:142
            updateReligionDescriptionModal('CHRISTIANITY', openAprosImage +   // > CustomCode.cardMatchingFunctionality:143
                                           'On Fridays, Catholics usually abstain from eating meat (this does not ' +  // > CustomCode.cardMatchingFunctionality:144
                                           'include fish and seafood), as an act of penance to remember Christ’s ' +  // > CustomCode.cardMatchingFunctionality:145
                                           'sacrificial death on the cross for their sins. Most members of other ' +  // > CustomCode.cardMatchingFunctionality:146
                                           'alcoholic beverages. Non-Christians should not take personal offence ' +  // > CustomCode.cardMatchingFunctionality:147
                                           'when some Christians refrain from eating food that has been prayed over ' +  // > CustomCode.cardMatchingFunctionality:148
                                           'or offered to deities.' +  // > CustomCode.cardMatchingFunctionality:149
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:150
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:151
            document.getElementById('christianityIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:152
            document.getElementById('christianityText').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:153
            break;  // > CustomCode.cardMatchingFunctionality:154
            case "islam":  // > CustomCode.cardMatchingFunctionality:155
            updateReligionDescriptionModal('ISLAM', openAprosImage +   // > CustomCode.cardMatchingFunctionality:156
                                           'Ideally halal food has to be tayyib (wholesome and healthy), and prepared ' +  // > CustomCode.cardMatchingFunctionality:157
                                           'with utensils that have not been in contact with haram (forbidden foods), ' +  // > CustomCode.cardMatchingFunctionality:158
                                           'which could include pork and blood, and with drinks containing alcohol. ' +  // > CustomCode.cardMatchingFunctionality:159
                                           'Muslims are forbidden to eat meats that have been ritually dedicated to ' +  // > CustomCode.cardMatchingFunctionality:160
                                           'things, or beings. Most Muslims are concerned that any meat served must ' +  // > CustomCode.cardMatchingFunctionality:161
                                           'be prepared in accordance with Islamic slaughter rites. Generally, Muslims ' +  // > CustomCode.cardMatchingFunctionality:162
                                           'are happy to have vegetarian food that has no alcohol, meat or by-' +  // > CustomCode.cardMatchingFunctionality:163
                                           'products such as animal gelatin. Such purely vegetarian food can be ' +  // > CustomCode.cardMatchingFunctionality:164
                                           'considered as halal.' +  // > CustomCode.cardMatchingFunctionality:165
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:166
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:167
            document.getElementById('islamIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:168
            document.getElementById('islamText').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:169
            break;  // > CustomCode.cardMatchingFunctionality:170
            case "sikhism":  // > CustomCode.cardMatchingFunctionality:171
            updateReligionDescriptionModal('SIKHISM', openAprosImage +   // > CustomCode.cardMatchingFunctionality:172
                                           'Only vegetarian meals are prepared and served for consumption in the ' +  // > CustomCode.cardMatchingFunctionality:173
                                           'gurdwara. Meat consumed is of an animal that has been killed instantly with ' +  // > CustomCode.cardMatchingFunctionality:174
                                           'one stroke. Consumption of intoxicants, smoking tobacco and the use of ' +  // > CustomCode.cardMatchingFunctionality:175
                                           'drugs, alcohol and meat are forbidden in the temple precincts. Sikhs are not ' +  // > CustomCode.cardMatchingFunctionality:176
                                           'vegetarians, but Sikh teachings exhort that a Sikh must “Avoid food and ' +  // > CustomCode.cardMatchingFunctionality:177
                                           'clothing which harm the body or provoke evil thoughts.” (Sri Rag Ml, 16)' +  // > CustomCode.cardMatchingFunctionality:178
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:179
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:180
            document.getElementById('sikhismIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:181
            document.getElementById('sikhismText').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:182
            break;  // > CustomCode.cardMatchingFunctionality:183
            case "bahai":  // > CustomCode.cardMatchingFunctionality:184
            updateReligionDescriptionModal("BAHA'I FAITH", openAprosImage +   // > CustomCode.cardMatchingFunctionality:185
                                           'Bahá’ís are forbidden to consume alcohol and hallucinogenic drugs. The ' +  // > CustomCode.cardMatchingFunctionality:186
                                           'only exception is when the physician prescribes it as a form of medical ' +  // > CustomCode.cardMatchingFunctionality:187
                                           'treatment.' +  // > CustomCode.cardMatchingFunctionality:188
                                           closeAprosImage);  // > CustomCode.cardMatchingFunctionality:189
            showReligionDescriptionModal();  // > CustomCode.cardMatchingFunctionality:190
            document.getElementById('bahaiIcon').classList.add('correctly-matched');  // > CustomCode.cardMatchingFunctionality:191
            document.getElementById('bahaiText').classList.add('correctly-matched');            // > CustomCode.cardMatchingFunctionality:192
            break;  // > CustomCode.cardMatchingFunctionality:193
          }  // > CustomCode.cardMatchingFunctionality:194
            // > CustomCode.cardMatchingFunctionality:195
        } else {  // > CustomCode.cardMatchingFunctionality:196
          // code below runs on WRONG image - name religion matching  // > CustomCode.cardMatchingFunctionality:197
            // > CustomCode.cardMatchingFunctionality:198
          // adds 1 to total number of attempts  // > CustomCode.cardMatchingFunctionality:199
          questionAttempts[religionImageSelected] += 1;  // > CustomCode.cardMatchingFunctionality:200
          _println(questionAttempts);  // > CustomCode.cardMatchingFunctionality:201
            // > CustomCode.cardMatchingFunctionality:202
          // ============= Moodle submission for question: Begin =============    // > CustomCode.cardMatchingFunctionality:203
            // submit history to moodle using library for incorrect matches here.  // > CustomCode.cardMatchingFunctionality:204
              // > CustomCode.cardMatchingFunctionality:205
            let questionName = `Q${questionNumbers[religionImageSelected]}`; // Q1, Q2, etc..  // > CustomCode.cardMatchingFunctionality:206
            startQuestion(questionName);  // > CustomCode.cardMatchingFunctionality:207
            onAnswer(religionNameSelected, false, "Selected Image: " + religionImageSelected + ", Selected Name: " + religionNameSelected);     // > CustomCode.cardMatchingFunctionality:208
            endQuestion();  // > CustomCode.cardMatchingFunctionality:209
             // > CustomCode.cardMatchingFunctionality:210
            // ============= Moodle submission for marks awarded: End =============    // > CustomCode.cardMatchingFunctionality:211
            // > CustomCode.cardMatchingFunctionality:212
          _view.wrongSound.play();  // > CustomCode.cardMatchingFunctionality:213
            // > CustomCode.cardMatchingFunctionality:214
          disableRadioButtons(".religion-labels input");  // > CustomCode.cardMatchingFunctionality:215
          unCheckRadioButtons(".religion-pictures input");  // > CustomCode.cardMatchingFunctionality:216
          unCheckRadioButtons(".religion-labels input");  // > CustomCode.cardMatchingFunctionality:217
          switch (religionNameSelected) {  // > CustomCode.cardMatchingFunctionality:218
            // display speech bubbles for respective religion names  // > CustomCode.cardMatchingFunctionality:219
              // > CustomCode.cardMatchingFunctionality:220
            case "hinduism":  // > CustomCode.cardMatchingFunctionality:221
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:222
            document.querySelector('#hinduism-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:223
            document.querySelector('#hinduism-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:224
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:225
              document.querySelector('#hinduism-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:226
              document.querySelector('#hinduism-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:227
            }, 2500)  // > CustomCode.cardMatchingFunctionality:228
            break;  // > CustomCode.cardMatchingFunctionality:229
            case "judaism":  // > CustomCode.cardMatchingFunctionality:230
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:231
            document.querySelector('#judaism-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:232
            document.querySelector('#judaism-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:233
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:234
              document.querySelector('#judaism-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:235
              document.querySelector('#judaism-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:236
            }, 2500)  // > CustomCode.cardMatchingFunctionality:237
            break;  // > CustomCode.cardMatchingFunctionality:238
            case "zoroastrian":  // > CustomCode.cardMatchingFunctionality:239
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:240
            document.querySelector('#zoroastrian-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:241
            document.querySelector('#zoroastrian-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:242
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:243
              document.querySelector('#zoroastrian-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:244
              document.querySelector('#zoroastrian-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:245
            }, 2500)  // > CustomCode.cardMatchingFunctionality:246
            break;  // > CustomCode.cardMatchingFunctionality:247
            case "buddhism":  // > CustomCode.cardMatchingFunctionality:248
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:249
            document.querySelector('#buddhism-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:250
            document.querySelector('#buddhism-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:251
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:252
              document.querySelector('#buddhism-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:253
              document.querySelector('#buddhism-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:254
            }, 2500)  // > CustomCode.cardMatchingFunctionality:255
            break;  // > CustomCode.cardMatchingFunctionality:256
            case "taoism":  // > CustomCode.cardMatchingFunctionality:257
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:258
            document.querySelector('#taoism-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:259
            document.querySelector('#taoism-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:260
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:261
              document.querySelector('#taoism-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:262
              document.querySelector('#taoism-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:263
            }, 2500)  // > CustomCode.cardMatchingFunctionality:264
            break;  // > CustomCode.cardMatchingFunctionality:265
            case "jainism":  // > CustomCode.cardMatchingFunctionality:266
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:267
            document.querySelector('#jainism-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:268
            document.querySelector('#jainism-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:269
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:270
              document.querySelector('#jainism-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:271
              document.querySelector('#jainism-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:272
            }, 2500)  // > CustomCode.cardMatchingFunctionality:273
            break;  // > CustomCode.cardMatchingFunctionality:274
            case "christianity":  // > CustomCode.cardMatchingFunctionality:275
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:276
            document.querySelector('#christianity-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:277
            document.querySelector('#christianity-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:278
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:279
              document.querySelector('#christianity-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:280
              document.querySelector('#christianity-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:281
            }, 2500)  // > CustomCode.cardMatchingFunctionality:282
            break;  // > CustomCode.cardMatchingFunctionality:283
            case "islam":  // > CustomCode.cardMatchingFunctionality:284
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:285
            document.querySelector('#islam-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:286
            document.querySelector('#islam-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:287
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:288
              document.querySelector('#islam-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:289
              document.querySelector('#islam-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:290
            }, 2500)  // > CustomCode.cardMatchingFunctionality:291
            break;  // > CustomCode.cardMatchingFunctionality:292
            case "sikhism":  // > CustomCode.cardMatchingFunctionality:293
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:294
            document.querySelector('#sikhism-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:295
            document.querySelector('#sikhism-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:296
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:297
              document.querySelector('#sikhism-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:298
              document.querySelector('#sikhism-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:299
            }, 2500)  // > CustomCode.cardMatchingFunctionality:300
            break;  // > CustomCode.cardMatchingFunctionality:301
            case "bahai":  // > CustomCode.cardMatchingFunctionality:302
            //insert code for speech bubble here  // > CustomCode.cardMatchingFunctionality:303
            document.querySelector('#bahai-sb').classList.remove('opacity-0');  // > CustomCode.cardMatchingFunctionality:304
            document.querySelector('#bahai-sb').classList.add('opacity-1');  // > CustomCode.cardMatchingFunctionality:305
            setTimeout(() => {  // > CustomCode.cardMatchingFunctionality:306
              document.querySelector('#bahai-sb').classList.remove('opacity-1');  // > CustomCode.cardMatchingFunctionality:307
              document.querySelector('#bahai-sb').classList.add('opacity-0');  // > CustomCode.cardMatchingFunctionality:308
            }, 2500)  // > CustomCode.cardMatchingFunctionality:309
            break;  // > CustomCode.cardMatchingFunctionality:310
          }  // > CustomCode.cardMatchingFunctionality:311
          religionImageSelected = "";  // > CustomCode.cardMatchingFunctionality:312
          religionNameSelected = "";  // > CustomCode.cardMatchingFunctionality:313
        }  // > CustomCode.cardMatchingFunctionality:314
      });  // > CustomCode.cardMatchingFunctionality:315
    });  // > CustomCode.cardMatchingFunctionality:316
  }  // > CustomCode.cardMatchingFunctionality:317
  function checkMatch(name) {  // > CustomCode.cardMatchingFunctionality:318
    // this block dynamically resizes the height of the canvas so both ends of the connecting lines   // > CustomCode.cardMatchingFunctionality:319
    // are always touching the corresponding radio buttons for a match  // > CustomCode.cardMatchingFunctionality:320
    if (!isGameInProgress) {  // > CustomCode.cardMatchingFunctionality:321
      isGameInProgress = true;   // > CustomCode.cardMatchingFunctionality:322
      let canvas = document.getElementById("my-canvas");  // > CustomCode.cardMatchingFunctionality:323
      let a = document.getElementById('canvas_container');     // > CustomCode.cardMatchingFunctionality:324
      canvas.height = getContainerHeight(a);  // > CustomCode.cardMatchingFunctionality:325
    }  // > CustomCode.cardMatchingFunctionality:326
      // > CustomCode.cardMatchingFunctionality:327
  }  // > CustomCode.cardMatchingFunctionality:328

  function drawConnectorLines(name) {  // > CustomCode.drawMatchingLines:1
    const canvas = document.getElementById('my-canvas-'+currentStage);  // > CustomCode.drawMatchingLines:2
    const yPos1 = 0; // -6: ensure start point of line drawn to go through center of radio  // > CustomCode.drawMatchingLines:3
    const yPos2 = canvas.height; // +6 ensure end point of line drawn to go through center of radio  // > CustomCode.drawMatchingLines:4
    if (name === "hinduism") {      // > CustomCode.drawMatchingLines:5
      drawOneConnectorLine(getXCordOfLineStart("hinduism"), yPos1, getXCordOfLineEnd("hinduism"), yPos2);  // > CustomCode.drawMatchingLines:6
    }  // > CustomCode.drawMatchingLines:7
    if (name === "judaism") {  // > CustomCode.drawMatchingLines:8
      drawOneConnectorLine(getXCordOfLineStart("judaism"), yPos1, getXCordOfLineEnd("judaism"), yPos2);  // > CustomCode.drawMatchingLines:9
    }  // > CustomCode.drawMatchingLines:10
    if (name === "zoroastrian") {  // > CustomCode.drawMatchingLines:11
      drawOneConnectorLine(getXCordOfLineStart("zoroastrian"), yPos1, getXCordOfLineEnd("zoroastrian"), yPos2);  // > CustomCode.drawMatchingLines:12
    }  // > CustomCode.drawMatchingLines:13
    if (name === "buddhism") {  // > CustomCode.drawMatchingLines:14
      drawOneConnectorLine(getXCordOfLineStart("buddhism"), yPos1, getXCordOfLineEnd("buddhism"), yPos2);  // > CustomCode.drawMatchingLines:15
    }  // > CustomCode.drawMatchingLines:16
    if (name === "taoism") {  // > CustomCode.drawMatchingLines:17
      drawOneConnectorLine(getXCordOfLineStart("taoism"), yPos1, getXCordOfLineEnd("taoism"), yPos2);  // > CustomCode.drawMatchingLines:18
    }  // > CustomCode.drawMatchingLines:19
    if (name === "jainism") {  // > CustomCode.drawMatchingLines:20
      drawOneConnectorLine(getXCordOfLineStart("jainism"), yPos1, getXCordOfLineEnd("jainism"), yPos2);  // > CustomCode.drawMatchingLines:21
    }  // > CustomCode.drawMatchingLines:22
    if (name === "christianity") {  // > CustomCode.drawMatchingLines:23
      drawOneConnectorLine(getXCordOfLineStart("christianity"), yPos1, getXCordOfLineEnd("christianity"), yPos2);  // > CustomCode.drawMatchingLines:24
    }  // > CustomCode.drawMatchingLines:25
    if (name === "islam") {  // > CustomCode.drawMatchingLines:26
      drawOneConnectorLine(getXCordOfLineStart("islam"), yPos1, getXCordOfLineEnd("islam"), yPos2);  // > CustomCode.drawMatchingLines:27
    }  // > CustomCode.drawMatchingLines:28
    if (name === "sikhism") {  // > CustomCode.drawMatchingLines:29
      drawOneConnectorLine(getXCordOfLineStart("sikhism"), yPos1, getXCordOfLineEnd("sikhism"), yPos2);  // > CustomCode.drawMatchingLines:30
    }  // > CustomCode.drawMatchingLines:31
    if (name === "bahai") {  // > CustomCode.drawMatchingLines:32
      drawOneConnectorLine(getXCordOfLineStart("bahai"), yPos1, getXCordOfLineEnd("bahai"), yPos2);  // > CustomCode.drawMatchingLines:33
    }  // > CustomCode.drawMatchingLines:34
  }  // > CustomCode.drawMatchingLines:35
  function drawOneConnectorLine(xPos1, yPos1, xPos2, yPos2) {  // > CustomCode.drawMatchingLines:36
    const canvas = document.getElementById('my-canvas-'+currentStage);  // > CustomCode.drawMatchingLines:37
    const ctx = canvas.getContext("2d");  // > CustomCode.drawMatchingLines:38
    ctx.beginPath(); // Start a new path for the dot  // > CustomCode.drawMatchingLines:39
    ctx.strokeStyle = "#FF0082"; // Set the fill color for the dot  // > CustomCode.drawMatchingLines:40
      // > CustomCode.drawMatchingLines:41
    ctx.moveTo(xPos1, yPos1);  // > CustomCode.drawMatchingLines:42
    ctx.lineTo(xPos2, yPos2);  // > CustomCode.drawMatchingLines:43
    // Properties only for SLS platform small preview window!  // > CustomCode.drawMatchingLines:44
    // height should be 3/4 for SLS screen and something else for expanded viewports  // > CustomCode.drawMatchingLines:45
    if (_view._topFrame.clientWidth < 650) {  // > CustomCode.drawMatchingLines:46
      ctx.lineWidth = 3;  // > CustomCode.drawMatchingLines:47
      ctx.setLineDash([5, 5]);  // > CustomCode.drawMatchingLines:48
    } else {  // > CustomCode.drawMatchingLines:49
      ctx.lineWidth = 4.5;  // > CustomCode.drawMatchingLines:50
      ctx.setLineDash([10, 12]);  // > CustomCode.drawMatchingLines:51
    }  // > CustomCode.drawMatchingLines:52
    ctx.stroke();  // > CustomCode.drawMatchingLines:53
  }  // > CustomCode.drawMatchingLines:54
  function getXCordOfLineStart(religion) {  // > CustomCode.drawMatchingLines:55
    // purpose of function: to find the exact coordinates of religion image radio for the starting point of line  // > CustomCode.drawMatchingLines:56
    // 1. remove excess left margin of parent and grandparent container  // > CustomCode.drawMatchingLines:57
    const gameScreen = document.getElementById('gameScreen');  // > CustomCode.drawMatchingLines:58
    const stage = document.getElementById('stage'+currentStage);  // > CustomCode.drawMatchingLines:59
    const excessLeftMargin = getLeftMargin(stage) + getLeftMargin(gameScreen);  // > CustomCode.drawMatchingLines:60
      // > CustomCode.drawMatchingLines:61
    // 2. find distance from left of religion image container to left of stage# container  // > CustomCode.drawMatchingLines:62
    const parentElem = document.getElementById(religion+'Pic').parentElement;  // > CustomCode.drawMatchingLines:63
    const distanceToLeftOfStageContainer = parentElem.offsetLeft;  // > CustomCode.drawMatchingLines:64
      // > CustomCode.drawMatchingLines:65
    // 3. get difference of 2 and 1  // > CustomCode.drawMatchingLines:66
    const difference = distanceToLeftOfStageContainer - excessLeftMargin;  // > CustomCode.drawMatchingLines:67
      // > CustomCode.drawMatchingLines:68
    // 4. get length of religion radio  // > CustomCode.drawMatchingLines:69
    const lengthOfRadio = document.querySelector(`#${religion}Pic + div > label`).offsetWidth;  // > CustomCode.drawMatchingLines:70
      // > CustomCode.drawMatchingLines:71
    // 5. take the difference and add it to 1/2 the length of image container  // > CustomCode.drawMatchingLines:72
    const xCordStart = difference + (parentElem.clientWidth / 2); // add half the length of radio to ensure line goes through the center of it  // > CustomCode.drawMatchingLines:73
    return xCordStart;  // > CustomCode.drawMatchingLines:74
  }  // > CustomCode.drawMatchingLines:75
  function getXCordOfLineEnd(religion) {  // > CustomCode.drawMatchingLines:76
    // purpose of function: to find the exact coordinates of religion image radio for the ending point of line  // > CustomCode.drawMatchingLines:77
      // > CustomCode.drawMatchingLines:78
    // 1. remove excess left margin of parent and grandparent container  // > CustomCode.drawMatchingLines:79
    const gameScreen = document.getElementById('gameScreen');  // > CustomCode.drawMatchingLines:80
    const stage = document.getElementById('stage'+currentStage);  // > CustomCode.drawMatchingLines:81
    const excessLeftMargin = getLeftMargin(stage) + getLeftMargin(gameScreen);  // > CustomCode.drawMatchingLines:82
      // > CustomCode.drawMatchingLines:83
    // 2. find distance from left of religion image container to left of stage# container  // > CustomCode.drawMatchingLines:84
    const parentElem = document.getElementById(religion+'Name').parentElement;  // > CustomCode.drawMatchingLines:85
    const distanceToLeftOfStageContainer = parentElem.offsetLeft;  // > CustomCode.drawMatchingLines:86
      // > CustomCode.drawMatchingLines:87
    // 3. get difference of 2 and 1  // > CustomCode.drawMatchingLines:88
    const difference = distanceToLeftOfStageContainer - excessLeftMargin;  // > CustomCode.drawMatchingLines:89
      // > CustomCode.drawMatchingLines:90
    // 4. take the difference and add it to 1/2 the length of image container  // > CustomCode.drawMatchingLines:91
    const xCordEnd = difference + (parentElem.clientWidth / 2); // -12 to align line ends at the center of radio  // > CustomCode.drawMatchingLines:92
      // > CustomCode.drawMatchingLines:93
    return xCordEnd;  // > CustomCode.drawMatchingLines:94
  }  // > CustomCode.drawMatchingLines:95
  function resizeCanvas() {   // > CustomCode.drawMatchingLines:96
    const canvas = document.getElementById('my-canvas-'+currentStage);  // > CustomCode.drawMatchingLines:97
    let canvasContainer = document.getElementById('canvas_container');    // > CustomCode.drawMatchingLines:98
    canvas.width = canvas.parentElement.clientWidth * 1;  // > CustomCode.drawMatchingLines:99
    // canvas.height = getContainerHeight(canvasContainer);  // > CustomCode.drawMatchingLines:100
    canvas.height = window.innerHeight / 4;  // > CustomCode.drawMatchingLines:101
        // > CustomCode.drawMatchingLines:102
    const nodeList = document.querySelectorAll(`#stage${currentStage} .religion-pictures img`); // Select all current religions shown  // > CustomCode.drawMatchingLines:103
    const religions = Array.from(nodeList).map(element => element.id.slice(0, -3)); // get all religion names  // > CustomCode.drawMatchingLines:104
      // > CustomCode.drawMatchingLines:105
    // check if line(s) in current stage is already drawn  // > CustomCode.drawMatchingLines:106
    religions.forEach((religion) => {  // > CustomCode.drawMatchingLines:107
      let isMatched = areCardsMatched[religion];  // > CustomCode.drawMatchingLines:108
      if (isMatched) {  // > CustomCode.drawMatchingLines:109
          // reraw the line  // > CustomCode.drawMatchingLines:110
          console.log('redrawing line');  // > CustomCode.drawMatchingLines:111
          drawConnectorLines(religion);  // > CustomCode.drawMatchingLines:112
      }      // > CustomCode.drawMatchingLines:113
    })    // > CustomCode.drawMatchingLines:114
  }  // > CustomCode.drawMatchingLines:115
  function getLeftMargin(element) {  // > CustomCode.drawMatchingLines:116
    const computedStyle = window.getComputedStyle(element);  // > CustomCode.drawMatchingLines:117
    return parseFloat(computedStyle.marginLeft);  // > CustomCode.drawMatchingLines:118
  }  // > CustomCode.drawMatchingLines:119
  function getContainerHeight(element) {  // > CustomCode.drawMatchingLines:120
    return element.offsetHeight;  // > CustomCode.drawMatchingLines:121
  }  // > CustomCode.drawMatchingLines:122
  function clearCanvas() {  // > CustomCode.drawMatchingLines:123
    const canvas = document.getElementById('my-canvas-'+currentStage);  // > CustomCode.drawMatchingLines:124
    const context = canvas.getContext('2d');  // > CustomCode.drawMatchingLines:125
    context.clearRect(0, 0, canvas.width, canvas.height);   // > CustomCode.drawMatchingLines:126
  }  // > CustomCode.drawMatchingLines:127

  function disableRadioButtons(selector) {  // > CustomCode.radioButtons:1
    var x = document.querySelectorAll(selector);  // > CustomCode.radioButtons:2
    for (i = 0; i < x.length; i++) {  // > CustomCode.radioButtons:3
      x[i].disabled = true;  // > CustomCode.radioButtons:4
    }  // > CustomCode.radioButtons:5
  }  // > CustomCode.radioButtons:6
  function enableRadioButtons(selector) {  // > CustomCode.radioButtons:7
    var x = document.querySelectorAll(selector);  // > CustomCode.radioButtons:8
    for (i = 0; i < x.length; i++) {  // > CustomCode.radioButtons:9
      x[i].disabled = false;  // > CustomCode.radioButtons:10
    }  // > CustomCode.radioButtons:11
  }  // > CustomCode.radioButtons:12
  function unCheckRadioButtons(selector) {  // > CustomCode.radioButtons:13
    var radioButtons = document.querySelectorAll(selector);  // > CustomCode.radioButtons:14
    radioButtons.forEach(function (radioButton) {  // > CustomCode.radioButtons:15
      radioButton.checked = false;  // > CustomCode.radioButtons:16
    });  // > CustomCode.radioButtons:17
  }  // > CustomCode.radioButtons:18
  function checkIfAnyRadioSelected(selector) {  // > CustomCode.radioButtons:19
    var radios = document.querySelectorAll(selector);  // > CustomCode.radioButtons:20
    for (const radio of radios) {  // > CustomCode.radioButtons:21
      if (radio.checked) {  // > CustomCode.radioButtons:22
        return true;  // > CustomCode.radioButtons:23
      }  // > CustomCode.radioButtons:24
    }  // > CustomCode.radioButtons:25
    return false;  // > CustomCode.radioButtons:26
  }  // > CustomCode.radioButtons:27

  function allCardsCorrectedMatched() {	  // > CustomCode.stage:1
    // checks matches based on the currentStage  // > CustomCode.stage:2
    if (currentStage == 1) {  // > CustomCode.stage:3
      return (  // > CustomCode.stage:4
        areCardsMatched.hinduism &&  // > CustomCode.stage:5
        areCardsMatched.judaism &&  // > CustomCode.stage:6
        areCardsMatched.zoroastrian  // > CustomCode.stage:7
      );  // > CustomCode.stage:8
    } else if (currentStage == 2) {  // > CustomCode.stage:9
      return (  // > CustomCode.stage:10
        areCardsMatched.buddhism &&  // > CustomCode.stage:11
        areCardsMatched.taoism &&  // > CustomCode.stage:12
        areCardsMatched.jainism  // > CustomCode.stage:13
      );  // > CustomCode.stage:14
    } else if (currentStage == 3) {  // > CustomCode.stage:15
      return (  // > CustomCode.stage:16
        areCardsMatched.christianity &&  // > CustomCode.stage:17
        areCardsMatched.islam &&  // > CustomCode.stage:18
        areCardsMatched.sikhism &&  // > CustomCode.stage:19
        areCardsMatched.bahai  // > CustomCode.stage:20
      );  // > CustomCode.stage:21
    }  // > CustomCode.stage:22
    return false;  // > CustomCode.stage:23
  }  // > CustomCode.stage:24

  async function callFuncAfterSomeSeconds(seconds, callback) {  // > CustomCode.utils:1
    await sleep(seconds);  // > CustomCode.utils:2
    callback();  // > CustomCode.utils:3
  }  // > CustomCode.utils:4
  function sleep(seconds) {  // > CustomCode.utils:5
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));  // > CustomCode.utils:6
  }  // > CustomCode.utils:7

  function showReligionDescriptionModal() {  // > CustomCode.modals:1
    document.getElementById('religionDescriptionModal').classList.add('d-block');  // > CustomCode.modals:2
    document.getElementById('religionDescriptionModal').classList.remove('d-none');  // > CustomCode.modals:3
    document.getElementById('overlay').style.display = "block";  // > CustomCode.modals:4
    // for some reason, we need cannot transition the opacity of the overlay synchronously to achieve the fade in effect  // > CustomCode.modals:5
    // hence, using the setTimeout  // > CustomCode.modals:6
    setTimeout(() => document.getElementById('overlay').style.opacity = 1, 0);   // > CustomCode.modals:7
  }  // > CustomCode.modals:8
  function hideReligionDescriptionModal() {    // > CustomCode.modals:9
    document.getElementById('religionDescriptionModal').classList.remove('d-block');  // > CustomCode.modals:10
    document.getElementById('religionDescriptionModal').classList.add('d-none');  // > CustomCode.modals:11
      // > CustomCode.modals:12
    document.getElementById('overlay').style.opacity = 0;  // > CustomCode.modals:13
    document.getElementById('overlay').style.display = "none";  // > CustomCode.modals:14
  }  // > CustomCode.modals:15
  function updateReligionDescriptionModal (title, body) {  // > CustomCode.modals:16
    document.querySelector('#religionDescriptionModal > #rdTitle').innerHTML = title;  // > CustomCode.modals:17
    document.querySelector('#religionDescriptionModal #rdBody').innerHTML = body;  // > CustomCode.modals:18
  }  // > CustomCode.modals:19
  function hideStageClearedModal() {  // > CustomCode.modals:20
    document.querySelector('#stageClearedModal').classList.remove('d-flex');  // > CustomCode.modals:21
    document.querySelector('#stageClearedModal').classList.add('d-none');  // > CustomCode.modals:22
    document.getElementById('overlay').style.opacity = 0;  // > CustomCode.modals:23
    document.getElementById('overlay').style.display = "none";  // > CustomCode.modals:24
  }  // > CustomCode.modals:25
  function updateStageClearedModal (title, body) {  // > CustomCode.modals:26
    document.querySelector('#stageClearedModal > #scTitle').innerHTML = title;  // > CustomCode.modals:27
    document.querySelector('#stageClearedModal > #scBody').innerHTML = body;  // > CustomCode.modals:28
  }  // > CustomCode.modals:29
  class StageClearedModal {  // > CustomCode.modals:30
    constructor(title="", body="", btnText="") {  // > CustomCode.modals:31
      this.title = title;  // > CustomCode.modals:32
      this.body = body;  // > CustomCode.modals:33
      this.btnText = btnText;  // > CustomCode.modals:34
    }  // > CustomCode.modals:35
      // > CustomCode.modals:36
    setAttributes() {  // > CustomCode.modals:37
      document.querySelector('#stageClearedModal > #scTitle').innerHTML = this.title;  // > CustomCode.modals:38
      document.querySelector('#stageClearedModal > #scBody').innerHTML = this.body;  // > CustomCode.modals:39
      document.querySelector('#stageClearedModal > #scBtn').innerHTML = this.btnText;  // > CustomCode.modals:40
    }  // > CustomCode.modals:41
    show() {  // > CustomCode.modals:42
      document.querySelector('#stageClearedModal').classList.remove('d-none');  // > CustomCode.modals:43
      document.querySelector('#stageClearedModal').classList.add('d-flex');  // > CustomCode.modals:44
      document.getElementById('overlay').style.display = "block";  // > CustomCode.modals:45
      setTimeout(() => document.getElementById('overlay').style.opacity = 1, 0);   // > CustomCode.modals:46
    }  // > CustomCode.modals:47
  }  // > CustomCode.modals:48

  function updateProgressBar(level) {  // > CustomCode.progressBar:1
    var progressLevel = document.getElementById("progressLevel");  // > CustomCode.progressBar:2
    progressLevel.style.width = level + "%";  // > CustomCode.progressBar:3
      // > CustomCode.progressBar:4
    if (level == 0) {  // > CustomCode.progressBar:5
      progressLevel.classList.add("emptybar");  // > CustomCode.progressBar:6
      progressLevel.classList.remove("fullbar");  // > CustomCode.progressBar:7
    } else if (level >= 1 && level < 100) {  // > CustomCode.progressBar:8
      progressLevel.classList.remove("emptybar");  // > CustomCode.progressBar:9
      progressLevel.classList.remove("fullbar");  // > CustomCode.progressBar:10
    } else {  // > CustomCode.progressBar:11
      progressLevel.classList.remove("emptybar");  // > CustomCode.progressBar:12
      progressLevel.classList.add("fullbar");  // > CustomCode.progressBar:13
    }  // > CustomCode.progressBar:14
  }  // > CustomCode.progressBar:15
  function showProgressBar() {  // > CustomCode.progressBar:16
    document.getElementById('progressBarContainer').style.display = "block";  // > CustomCode.progressBar:17
  }  // > CustomCode.progressBar:18
  function hideProgressBar() {  // > CustomCode.progressBar:19
    document.getElementById('progressBarContainer').style.display = "none";  // > CustomCode.progressBar:20
  }  // > CustomCode.progressBar:21
  function incrementProgressBarLevel() {  // > CustomCode.progressBar:22
    if (progressPercentage == 0) {  // > CustomCode.progressBar:23
      progressPercentage += 33;    // > CustomCode.progressBar:24
    } else if (progressPercentage == 33) {  // > CustomCode.progressBar:25
      progressPercentage += 34;    // > CustomCode.progressBar:26
    } else if (progressPercentage == 67) {  // > CustomCode.progressBar:27
      progressPercentage += 33;        // > CustomCode.progressBar:28
    }  // > CustomCode.progressBar:29
    updateProgressBar(progressPercentage);  // > CustomCode.progressBar:30
  }  // > CustomCode.progressBar:31

  // copy this custom function  // > CustomCode.sound:1
  // in iOS need to add speech to the play button as On iOS the API works but must be triggered by a user action callback, like a response to a tap event, to provide a better experience to users and avoid unexpected sounds out of your phone  // > CustomCode.sound:2
  function speech (option) {  // > CustomCode.sound:3
  try { // allow code to run in Student Learning Space   // > CustomCode.sound:4
  var isCordova = (!!this.parent.cordova || !!window.cordova);  // > CustomCode.sound:5
  if(isCordova) { // check it is running in Android or iOS  // > CustomCode.sound:6
         // parent.TTS.speak({text:option,locale:'zh-CN'});  // > CustomCode.sound:7
  	parent.TTS.speak({text:option,locale:'us-EN'});  // > CustomCode.sound:8
  	// parent.TTS.speak({text:option,locale:'en-US'});  // > CustomCode.sound:9
  }   // > CustomCode.sound:10
  }   // > CustomCode.sound:11
  catch(e) {  // > CustomCode.sound:12
    var isCordova = false;  // > CustomCode.sound:13
    }  // > CustomCode.sound:14
      // > CustomCode.sound:15
     var msg = new SpeechSynthesisUtterance(option);  // > CustomCode.sound:16
    //https://stackoverflow.com/questions/43983845/speechsynthesis-api-for-chinese-firefox  // > CustomCode.sound:17
    // Set the text.  // > CustomCode.sound:18
  	//msg.text = option;   // > CustomCode.sound:19
  	//https://forums.developer.apple.com/message/323564#323564  // > CustomCode.sound:20
  	// comment out the next 2 lines for english  // > CustomCode.sound:21
  //msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == 'Ting-Ting'; })[0];  // > CustomCode.sound:22
  //msg.lang = 'zh-CH'; // need for android?  // > CustomCode.sound:23
  msg.lang = 'us-EN'; // need for android?  // > CustomCode.sound:24
  //https://flaviocopes.com/speech-synthesis-api/  // > CustomCode.sound:25
  //debug  // > CustomCode.sound:26
  //console.log(`Voices #: ${speechSynthesis.getVoices().length}`)  // > CustomCode.sound:27
  //speechSynthesis.getVoices().forEach(voice => {  // > CustomCode.sound:28
  // console.log(voice.name, voice.lang)  // > CustomCode.sound:29
  //})  // > CustomCode.sound:30
  //debug  // > CustomCode.sound:31
  // Queue this utterance.  // > CustomCode.sound:32
  window.speechSynthesis.speak(msg);  // > CustomCode.sound:33
     // > CustomCode.sound:34
  }  // > CustomCode.sound:35

  // code to be copied to EJSS source code under Custom and used in drawingPanel3D and plottingPanel2D  // > CustomCode.changeOrientation:1
  // address the problem is height difference is iOS app , epub, and Firefox  // > CustomCode.changeOrientation:2
  // user need to change only k and kepub  // > CustomCode.changeOrientation:3
  // copy %changeOrientation()% into the Height Field of drawingPanel3D and plottingPanel2D  // > CustomCode.changeOrientation:4
  // _view.plottingPanel.getGraphics().setHeight(changeOrientation(0.85));  // > CustomCode.changeOrientation:5
  function changeOrientation(kheight) {  // > CustomCode.changeOrientation:6
     // > CustomCode.changeOrientation:7
  var k =0.90 ; // k control height 1 is for full screen, 0.9 shorten etc  // > CustomCode.changeOrientation:8
  var kapple =0.90 // control apple app height  // > CustomCode.changeOrientation:9
  var kepub =0.90 ;  // > CustomCode.changeOrientation:10
  // check platform for Apps  // > CustomCode.changeOrientation:11
  try { // allow code to run in Student Learning Space   // > CustomCode.changeOrientation:12
    var iOSapp =  (typeof parent.device != 'undefined' && parent.device.platform == "iOS");  // > CustomCode.changeOrientation:13
    var Androidapp = (typeof parent.device != 'undefined' && parent.device.platform == "Android");  // > CustomCode.changeOrientation:14
  } catch(e) {  // > CustomCode.changeOrientation:15
    var iOSapp = false;  // > CustomCode.changeOrientation:16
    var Androidapp = false;  // > CustomCode.changeOrientation:17
  }  // > CustomCode.changeOrientation:18
  // check platform for web browsers  // > CustomCode.changeOrientation:19
  var iOS =/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.changeOrientation:20
  var iPad =/iPad/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.changeOrientation:21
  var iPhone = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;  // > CustomCode.changeOrientation:22
  var Android= /Android|android/i.test(navigator.userAgent);  // > CustomCode.changeOrientation:23
  //navigator  // > CustomCode.changeOrientation:24
  var Firefox = navigator.userAgent.indexOf("Firefox") != -1;  // > CustomCode.changeOrientation:25
     // > CustomCode.changeOrientation:26
  switch (window.orientation) { // using window.orientation as deciding factor  // > CustomCode.changeOrientation:27
    case 0:  // > CustomCode.changeOrientation:28
    case 180:  // > CustomCode.changeOrientation:29
      this.screenOrientation = 'portrait';  // > CustomCode.changeOrientation:30
      if (iOSapp){ // does not seems to work  // > CustomCode.changeOrientation:31
          // > CustomCode.changeOrientation:32
        return window.screen.height*kapple;  //0.1 for app and 0.1 for nonfullscreenapp    // > CustomCode.changeOrientation:33
        // > CustomCode.changeOrientation:34
      }  // > CustomCode.changeOrientation:35
      else if (_isEPub){ // does not seems to work  // > CustomCode.changeOrientation:36
        //   return Math.max(window.screen.width,window.screen.height)*0.9;  // > CustomCode.changeOrientation:37
        return window.innerHeight*kepub;  //0.1 for app and 0.1 for nonfullscreenapp    // > CustomCode.changeOrientation:38
        // return window.screen.height;  // > CustomCode.changeOrientation:39
        //  return window.innerHeight;  // > CustomCode.changeOrientation:40
        // return document.documentElement.clientHeight;  // > CustomCode.changeOrientation:41
      }  // > CustomCode.changeOrientation:42
       // > CustomCode.changeOrientation:43
      else {  // > CustomCode.changeOrientation:44
       return window.innerHeight*kheight;  // > CustomCode.changeOrientation:45
        //return 100*k+"vh";  // > CustomCode.changeOrientation:46
      }  // > CustomCode.changeOrientation:47
      break;  // > CustomCode.changeOrientation:48
    case 90:  // > CustomCode.changeOrientation:49
    case -90:  // > CustomCode.changeOrientation:50
      this.screenOrientation = 'landscape';  // > CustomCode.changeOrientation:51
     // > CustomCode.changeOrientation:52
      if (iOSapp){ // App  // > CustomCode.changeOrientation:53
        return window.screen.width*kapple;    // > CustomCode.changeOrientation:54
        // return window.screen.height;  // > CustomCode.changeOrientation:55
        //  return window.innerHeight;  // > CustomCode.changeOrientation:56
        //  return document.documentElement.clientHeight;  // > CustomCode.changeOrientation:57
      }  // > CustomCode.changeOrientation:58
      else if (_isEPub){ // does not seems to work  // > CustomCode.changeOrientation:59
        //   return Math.max(window.screen.width,window.screen.height)*0.9;  // > CustomCode.changeOrientation:60
        return window.innerHeight*kepub;  //0.1 for app and 0.1 for nonfullscreenapp    // > CustomCode.changeOrientation:61
        // return window.screen.height;  // > CustomCode.changeOrientation:62
        //  return window.innerHeight;  // > CustomCode.changeOrientation:63
        // return document.documentElement.clientHeight;  // > CustomCode.changeOrientation:64
      }  // > CustomCode.changeOrientation:65
       // > CustomCode.changeOrientation:66
      else {  // > CustomCode.changeOrientation:67
        return window.innerHeight*kheight;  // > CustomCode.changeOrientation:68
        //return 100*k+"vh"; // safari produce error  // > CustomCode.changeOrientation:69
        }  // > CustomCode.changeOrientation:70
      break;  // > CustomCode.changeOrientation:71
    default:  // > CustomCode.changeOrientation:72
      this.screenOrientation = 'unknown';  // > CustomCode.changeOrientation:73
      //       return (iPad)?""+(window.screen.width+window.screen.height)*0.4:((iPhone)?""+window.screen.width:_view._format(window.innerHeight*0.9,"0"));  // > CustomCode.changeOrientation:74
       if (Firefox){  // > CustomCode.changeOrientation:75
        return window.innerHeight*k;// number as of 20180831 Firefox does not support vh yet so need a separate line to handle  // > CustomCode.changeOrientation:76
        }  // > CustomCode.changeOrientation:77
     //   else if (iOS&&(window.orientation==0)||(window.orientation==180)){  // > CustomCode.changeOrientation:78
     //   return  window.screen.height*k;// number as of 20180831 Firefox does not support vh yet so need a separate line to handle  // > CustomCode.changeOrientation:79
     //   }  // > CustomCode.changeOrientation:80
      //  else if (iOS&&(window.orientation==90)||(window.orientation==-90)){  // > CustomCode.changeOrientation:81
     //   return  window.screen.width*k;// number as of 20180831 Firefox does not support vh yet so need a separate line to handle  // > CustomCode.changeOrientation:82
     //   }  // > CustomCode.changeOrientation:83
        else {  // > CustomCode.changeOrientation:84
        //alert();  // > CustomCode.changeOrientation:85
        // return 100*k+"%"; // work on fullscreen works in EJSS6.0beta  // > CustomCode.changeOrientation:86
          //  works in EjsS_5.3_180131  // > CustomCode.changeOrientation:87
        return  window.innerHeight*kheight; // work on panel   // > CustomCode.changeOrientation:88
           // > CustomCode.changeOrientation:89
  }  // > CustomCode.changeOrientation:90
  }  // > CustomCode.changeOrientation:91
     // > CustomCode.changeOrientation:92
  }  // > CustomCode.changeOrientation:93

  //https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode  // > CustomCode.togglefullscreen:1
  // does not work for iOS   // > CustomCode.togglefullscreen:2
  /*jslint browser:true */  // > CustomCode.togglefullscreen:3
  function toggleFullScreen() {  // > CustomCode.togglefullscreen:4
    if (!document.fullscreenElement &&    // alternative standard method  // > CustomCode.togglefullscreen:5
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement ) {  // current working methods  // > CustomCode.togglefullscreen:6
      if (document.documentElement.requestFullscreen) {  // > CustomCode.togglefullscreen:7
        document.documentElement.requestFullscreen();  // > CustomCode.togglefullscreen:8
      } else if (document.documentElement.msRequestFullscreen) {  // > CustomCode.togglefullscreen:9
        document.documentElement.msRequestFullscreen();  // > CustomCode.togglefullscreen:10
      } else if (document.documentElement.mozRequestFullScreen) {  // > CustomCode.togglefullscreen:11
        document.documentElement.mozRequestFullScreen();  // > CustomCode.togglefullscreen:12
      } else if (document.documentElement.webkitRequestFullscreen) {  // > CustomCode.togglefullscreen:13
        document.documentElement.webkitRequestFullscreen();  // > CustomCode.togglefullscreen:14
      }  // > CustomCode.togglefullscreen:15
    } else {  // > CustomCode.togglefullscreen:16
      if (document.exitFullscreen) {  // > CustomCode.togglefullscreen:17
        document.exitFullscreen();  // > CustomCode.togglefullscreen:18
      } else if (document.msExitFullscreen) {  // > CustomCode.togglefullscreen:19
        document.msExitFullscreen();  // > CustomCode.togglefullscreen:20
      } else if (document.mozCancelFullScreen) {  // > CustomCode.togglefullscreen:21
        document.mozCancelFullScreen();  // > CustomCode.togglefullscreen:22
      } else if (document.webkitExitFullscreen) {  // > CustomCode.togglefullscreen:23
        document.webkitExitFullscreen();  // > CustomCode.togglefullscreen:24
      }  // > CustomCode.togglefullscreen:25
    }  // > CustomCode.togglefullscreen:26
  }  // > CustomCode.togglefullscreen:27

  _model.addToInitialization(function() {
    if (!__pagesEnabled["init"]) return;
    createMatchingFunctionality();  // > Initialization.init:1
    resizeCanvas();  // > Initialization.init:2
    window.addEventListener("resize", resizeCanvas);  // > Initialization.init:3
  });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

  _model.addToFixedRelations(function() { _isPaused = _model.isPaused(); _isPlaying = _model.isPlaying(); });

    _model._fontResized = function(iBase,iSize,iDelta) {
      _view._fontResized(iBase,iSize,iDelta);
  }; // end of _fontResized

  function _getViews() {
    var _viewsInfo = [];
    var _counter = 0;
    _viewsInfo[_counter++] = { name : "HtmlView Page", width : null, height : null };
    return _viewsInfo;
  } // end of _getViews

  function _selectView(_viewNumber) {
    _view = null;
    _view = new cross_cultural_View(_topFrame,_viewNumber,_libraryPath,_codebasePath);
    var _view_super_reset = _view._reset;
    _view._reset = function() {
      _view_super_reset();
      switch(_viewNumber) {
        case -10 : break; // make Lint happy
        default :
        case 0:
          _view.startBtn.setAction("OnClick", function(_data,_info) {
  const startPage = document.getElementById('gameStart');
  startPage.classList.remove('d-flex');
  startPage.classList.add('d-none');
  const introductionPage = document.getElementById('gameIntroduction');
  introductionPage.classList.remove('d-none');
  introductionPage.classList.add('d-flex');

}); // HtmlView Page setting action 'OnClick' for element 'startBtn'
          _view.gIntroBtn.setAction("OnClick", function(_data,_info) {
  // hide game introduction page
  const gameIntroductionPage = document.getElementById('gameIntroduction');
  gameIntroductionPage.classList.remove('d-flex');
  gameIntroductionPage.classList.add('d-none');
  // display game page
  const gamePage = document.getElementById('gameScreen');
  gamePage.classList.remove('d-none');
  gamePage.classList.add('d-flex');
  // prevent student being able to select names radios before selecting religion images at game start
  disableRadioButtons(".religion-names input"); 
  // resize canvas at the very beginning of stage 1, 
  // so the lines will be touching the both name and picture radios.
  setTimeout(resizeCanvas, 500);

}); // HtmlView Page setting action 'OnClick' for element 'gIntroBtn'
          _view.rdBtn.setAction("OnClick", function(_data,_info) {
  // show stage cleared modal when all cards are matched during stage
  if (allCardsCorrectedMatched()) {
    
    if (currentStage == 1) {
      hideReligionDescriptionModal();
      
      const modal = new StageClearedModal('YOU ARE OFF TO A GREAT START!', 'Can you keep up with your streak to match the next 3 religions?', 'CONTINUE');
      modal.setAttributes();
      callFuncAfterSomeSeconds(.25, modal.show);
      callFuncAfterSomeSeconds(.25, _view.clapSound.play);
      callFuncAfterSomeSeconds(.25, incrementProgressBarLevel);
    } else if (currentStage == 2) {
      hideReligionDescriptionModal();
      
      const modal = new StageClearedModal('YOU ARE ON A ROLL!', 'You’ve learned more about dietary practices of different religions! <br /><br /> '+
                                          'Challenge yourself to match the next 4 religions in your final stage.', 'CONTINUE');
      modal.setAttributes();
      callFuncAfterSomeSeconds(.25, modal.show);
      callFuncAfterSomeSeconds(.25, _view.clapSound.play);
      callFuncAfterSomeSeconds(.25, incrementProgressBarLevel);
    } else if (currentStage == 3) {
      
      // game ended
      _view.fanfareSound.play();
      
      const confetti = document.getElementById("confetti");
      confetti.classList.remove("d-none");
      
      callFuncAfterSomeSeconds(.25, incrementProgressBarLevel);
      hideReligionDescriptionModal();
      hasGameEnded = true;
      document.getElementById('gameEnd').classList.remove('d-none');
      document.getElementById('gameEnd').classList.add('d-block');
      
    }
  } else {
    hideReligionDescriptionModal();
    
    //one match is correct but not all
    disableRadioButtons(".religion-names input");
    unCheckRadioButtons(".religion-pictures input");
    unCheckRadioButtons(".religion-names input");
    cardSelected = "";
    matchSelected = "";
  }

}); // HtmlView Page setting action 'OnClick' for element 'rdBtn'
          _view.scBtn.setAction("OnClick", function(_data,_info) {
  // every time you click modal 'NEXT' btn (religion description) .. code below runs
  _println(allCardsCorrectedMatched());
  if (allCardsCorrectedMatched()) {
    if (currentStage == 1) {    
      hideStageClearedModal();
      
      document.querySelector('#stage1').classList.remove('d-block');
      document.querySelector('#stage1').classList.add('d-none');
      document.querySelector('#stage2').classList.remove('d-none');
      document.querySelector('#stage2').classList.add('d-block');
      
      currentStage = 2;
      clearCanvas();
      resizeCanvas();
      
    } else if (currentStage == 2) {
      hideStageClearedModal();
      
      document.querySelector('#stage2').classList.remove('d-block');
      document.querySelector('#stage2').classList.add('d-none');
      document.querySelector('#stage3').classList.remove('d-none');
      document.querySelector('#stage3').classList.add('d-block');
      
      currentStage = 3;
      clearCanvas();
      resizeCanvas();
    } else {
      
      
    }
    
  } else {
    //one match is correct but not all
    disableRadioButtons(".religion-names input");
    unCheckRadioButtons(".religion-pictures input");
    unCheckRadioButtons(".religion-names input");
    cardSelected = "";
    matchSelected = "";
  }
  hideReligionDescriptionModal();

}); // HtmlView Page setting action 'OnClick' for element 'scBtn'
          _view.gameEnd.setAction("OnClick", function(_data,_info) {
  window.close();

}); // HtmlView Page setting action 'OnClick' for element 'gameEnd'
          _view.gameEndBtn.setAction("OnClick", function(_data,_info) {
  window.close();

}); // HtmlView Page setting action 'OnClick' for element 'gameEndBtn'
          _view.copyright.linkProperty("Visibility",  function() { return currentPage!="gameIntroduction"?true:false; } ); // HtmlView Page linking property 'Visibility' for element 'copyright'
          break;
      } // end of switch
    }; // end of new reset

    _model.setView(_view);
    _model.reset();
    _view._enableEPub();
  } // end of _selectView

  _model.setAutoplay(false);
  _model.setFPS(100);
  _model.setStepsPerDisplay(1);
  _selectView(-1); // this includes _model.reset()
  return _model;
}
function cross_cultural_View (_topFrame,_viewNumber,_libraryPath,_codebasePath) {
  var _view;
  switch(_viewNumber) {
    case -10 : break; // make Lint happy
    default :
    case 0: _view = cross_cultural_View_0 (_topFrame); break;
  } // end of switch

  if (_codebasePath) _view._setResourcePath(_codebasePath);

  if (_libraryPath) _view._setLibraryPath(_libraryPath);


  return _view;
} // end of main function

function cross_cultural_View_0 (_topFrame) {
  var _view = EJSS_CORE.createView(_topFrame);

  _view._reset = function() {
    _view._clearAll();
    _view._addElement(EJSS_INTERFACE.panel,"gameStart", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'gameStart'
      .setProperty("ClassName","d-flex justify-content-center") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameStart'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameStartModal", _view.gameStart) // EJsS HtmlView.HtmlView Page: declaration of element 'gameStartModal'
      .setProperty("ClassName","position-absolute top-50 start-50 translate-middle w-50 h-50 d-flex justify-content-center align-items-center custom-container") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameStartModal'
      .setProperty("Html","<div class=\"container fs-1\">    In Singapore, the members <br /> of different religions foster <br /> inter-religious harmony by <br /> constantly learning from <br /> each other. <br/><br/>    ARE YOU READY TO PLAY <br /> YOUR PART? </div>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'gameStartModal'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"startBtn", _view.gameStart) // EJsS HtmlView.HtmlView Page: declaration of element 'startBtn'
      .setProperty("ClassName","position-absolute") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'startBtn'
      .setProperty("Html","<svg width=\"75\" height=\"31\" viewBox=\"0 0 75 31\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g filter=\"url(#filter0_d_863_9985)\"> <path d=\"M0 0H63C68.5229 0 73 4.47715 73 10V29H10C4.47715 29 0 24.5228 0 19V0Z\" fill=\"#FDFAF1\"/> <path d=\"M12.5788 20.126C11.9721 20.126 11.4215 20.0373 10.9268 19.86C10.4415 19.6827 10.0541 19.4633 9.76479 19.202C9.48479 18.9313 9.34479 18.6607 9.34479 18.39C9.34479 18.2593 9.37746 18.1193 9.44279 17.97C9.51746 17.8113 9.61546 17.6807 9.73679 17.578C9.85812 17.466 9.99346 17.41 10.1428 17.41C10.2921 17.41 10.4321 17.466 10.5628 17.578C10.6935 17.6807 10.8428 17.8067 11.0108 17.956C11.1788 18.096 11.3841 18.222 11.6268 18.334C11.8695 18.4367 12.1681 18.488 12.5228 18.488C12.8028 18.488 13.0595 18.446 13.2928 18.362C13.5355 18.2687 13.7268 18.1333 13.8668 17.956C14.0161 17.7787 14.0908 17.55 14.0908 17.27C14.0908 16.9713 14.0115 16.7193 13.8528 16.514C13.6941 16.3087 13.4795 16.1313 13.2088 15.982C12.9381 15.8327 12.6441 15.688 12.3268 15.548C12.0095 15.408 11.6875 15.2587 11.3608 15.1C11.0435 14.9413 10.7495 14.75 10.4788 14.526C10.2175 14.302 10.0028 14.0267 9.83479 13.7C9.67612 13.3733 9.59679 12.972 9.59679 12.496C9.59679 11.9733 9.69479 11.5347 9.89079 11.18C10.0961 10.8253 10.3621 10.5407 10.6888 10.326C11.0248 10.102 11.3935 9.94333 11.7948 9.85C12.1961 9.74733 12.5975 9.696 12.9988 9.696C13.2135 9.696 13.4655 9.71467 13.7548 9.752C14.0535 9.78 14.3475 9.836 14.6368 9.92C14.9355 10.004 15.1781 10.1207 15.3648 10.27C15.5608 10.41 15.6588 10.5967 15.6588 10.83C15.6588 10.9327 15.6308 11.0587 15.5748 11.208C15.5281 11.3573 15.4488 11.4927 15.3368 11.614C15.2341 11.7353 15.0988 11.796 14.9308 11.796C14.7815 11.796 14.6321 11.754 14.4828 11.67C14.3428 11.5767 14.1561 11.488 13.9228 11.404C13.6988 11.3107 13.3908 11.264 12.9988 11.264C12.6721 11.264 12.3875 11.306 12.1448 11.39C11.9021 11.474 11.7201 11.5953 11.5988 11.754C11.4775 11.9033 11.4168 12.0947 11.4168 12.328C11.4168 12.5707 11.4961 12.776 11.6548 12.944C11.8228 13.112 12.0375 13.2613 12.2988 13.392C12.5695 13.5227 12.8635 13.6533 13.1808 13.784C13.4981 13.9147 13.8155 14.0687 14.1328 14.246C14.4595 14.414 14.7581 14.6193 15.0288 14.862C15.2995 15.1047 15.5141 15.408 15.6728 15.772C15.8315 16.1267 15.9108 16.5653 15.9108 17.088C15.9108 17.7507 15.7661 18.3107 15.4768 18.768C15.1875 19.216 14.7908 19.5567 14.2868 19.79C13.7921 20.014 13.2228 20.126 12.5788 20.126ZM19.9776 20C19.7442 20 19.5342 19.9533 19.3476 19.86C19.1609 19.7573 19.0676 19.608 19.0676 19.412V11.404H17.0096C16.8322 11.404 16.6922 11.32 16.5896 11.152C16.4869 10.984 16.4356 10.7927 16.4356 10.578C16.4356 10.382 16.4822 10.2 16.5756 10.032C16.6689 9.85467 16.8136 9.766 17.0096 9.766H22.9316C23.1369 9.766 23.2816 9.85467 23.3656 10.032C23.4589 10.2 23.5056 10.382 23.5056 10.578C23.5056 10.7927 23.4542 10.984 23.3516 11.152C23.2582 11.32 23.1182 11.404 22.9316 11.404H20.8876V19.412C20.8876 19.608 20.7896 19.7573 20.5936 19.86C20.4069 19.9533 20.2016 20 19.9776 20ZM24.064 20C23.896 20 23.7234 19.9673 23.546 19.902C23.3687 19.8367 23.2194 19.748 23.098 19.636C22.9767 19.524 22.916 19.3933 22.916 19.244C22.916 19.216 22.9207 19.1693 22.93 19.104L25.632 10.298C25.6974 10.0927 25.842 9.93867 26.066 9.836C26.2994 9.73333 26.5467 9.682 26.808 9.682C27.0787 9.682 27.326 9.73333 27.55 9.836C27.774 9.93867 27.9187 10.0927 27.984 10.298L30.686 19.104C30.7047 19.1693 30.714 19.216 30.714 19.244C30.714 19.384 30.6487 19.5147 30.518 19.636C30.3967 19.748 30.2474 19.8367 30.07 19.902C29.8927 19.9673 29.72 20 29.552 20C29.4027 20 29.272 19.9767 29.16 19.93C29.0574 19.874 28.9874 19.776 28.95 19.636L28.418 17.774H25.198L24.68 19.636C24.6427 19.776 24.568 19.874 24.456 19.93C24.344 19.9767 24.2134 20 24.064 20ZM25.59 16.346H28.026L26.808 12.048L25.59 16.346ZM37.2831 20.07C37.1618 20.07 37.0404 20.0327 36.9191 19.958C36.8071 19.8833 36.7184 19.776 36.6531 19.636L34.6651 15.772H33.4891V19.412C33.4891 19.608 33.3958 19.7573 33.2091 19.86C33.0224 19.9533 32.8124 20 32.5791 20C32.3551 20 32.1451 19.9533 31.9491 19.86C31.7624 19.7573 31.6691 19.608 31.6691 19.412V10.34C31.6691 10.1813 31.7204 10.046 31.8231 9.934C31.9351 9.822 32.0798 9.766 32.2571 9.766H35.0291C35.6451 9.766 36.2004 9.85467 36.6951 10.032C37.1991 10.2093 37.6004 10.5127 37.8991 10.942C38.1978 11.362 38.3471 11.9453 38.3471 12.692C38.3471 13.2333 38.2678 13.6953 38.1091 14.078C37.9504 14.4513 37.7311 14.7547 37.4511 14.988C37.1804 15.212 36.8678 15.38 36.5131 15.492L38.3611 18.894C38.3798 18.9313 38.3938 18.9733 38.4031 19.02C38.4124 19.0573 38.4171 19.09 38.4171 19.118C38.4171 19.2673 38.3611 19.4167 38.2491 19.566C38.1371 19.7153 37.9924 19.8367 37.8151 19.93C37.6471 20.0233 37.4698 20.07 37.2831 20.07ZM33.4891 14.344H35.0291C35.4864 14.344 35.8504 14.232 36.1211 14.008C36.3918 13.784 36.5271 13.4013 36.5271 12.86C36.5271 12.3 36.3918 11.9127 36.1211 11.698C35.8504 11.474 35.4864 11.362 35.0291 11.362H33.4891V14.344ZM42.3311 20C42.0978 20 41.8878 19.9533 41.7011 19.86C41.5144 19.7573 41.4211 19.608 41.4211 19.412V11.404H39.3631C39.1858 11.404 39.0458 11.32 38.9431 11.152C38.8404 10.984 38.7891 10.7927 38.7891 10.578C38.7891 10.382 38.8358 10.2 38.9291 10.032C39.0224 9.85467 39.1671 9.766 39.3631 9.766H45.2851C45.4904 9.766 45.6351 9.85467 45.7191 10.032C45.8124 10.2 45.8591 10.382 45.8591 10.578C45.8591 10.7927 45.8078 10.984 45.7051 11.152C45.6118 11.32 45.4718 11.404 45.2851 11.404H43.2411V19.412C43.2411 19.608 43.1431 19.7573 42.9471 19.86C42.7604 19.9533 42.5551 20 42.3311 20Z\" fill=\"#FF0082\"/> <path d=\"M52 14C52 12.1435 52.7375 10.363 54.0503 9.05025C55.363 7.7375 57.1435 7 59 7C59.9193 7 60.8295 7.18106 61.6788 7.53284C62.5281 7.88463 63.2997 8.40024 63.9497 9.05025C64.5998 9.70026 65.1154 10.4719 65.4672 11.3212C65.8189 12.1705 66 13.0807 66 14C66 15.8565 65.2625 17.637 63.9497 18.9497C62.637 20.2625 60.8565 21 59 21C58.0807 21 57.1705 20.8189 56.3212 20.4672C55.4719 20.1154 54.7003 19.5998 54.0503 18.9497C52.7375 17.637 52 15.8565 52 14ZM57.6 17.5L61.1 14L57.6 10.5V17.5Z\" fill=\"#FF0082\"/> <path d=\"M0.5 0.5H63C68.2467 0.5 72.5 4.75329 72.5 10V28.5H10C4.7533 28.5 0.5 24.2467 0.5 19V0.5Z\" stroke=\"#F7CFE5\"/> </g> <defs> <filter id=\"filter0_d_863_9985\" x=\"0\" y=\"0\" width=\"75\" height=\"31\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/> <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/> <feOffset dx=\"2\" dy=\"2\"/> <feComposite in2=\"hardAlpha\" operator=\"out\"/> <feColorMatrix type=\"matrix\" values=\"0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.509804 0 0 0 1 0\"/> <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_863_9985\"/> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_863_9985\" result=\"shape\"/> </filter> </defs> </svg>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'startBtn'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameIntroduction", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'gameIntroduction'
      .setProperty("ClassName","d-none") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameIntroduction'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameIntroductionModal", _view.gameIntroduction) // EJsS HtmlView.HtmlView Page: declaration of element 'gameIntroductionModal'
      .setProperty("ClassName","position-absolute top-50 start-50 translate-middle w-50 h-50 d-flex flex-column justify-content-center align-items-center custom-container") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameIntroductionModal'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gIntroTitle", _view.gameIntroductionModal) // EJsS HtmlView.HtmlView Page: declaration of element 'gIntroTitle'
      .setProperty("Html","DID YOU KNOW?") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'gIntroTitle'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gIntroBody", _view.gameIntroductionModal) // EJsS HtmlView.HtmlView Page: declaration of element 'gIntroBody'
      .setProperty("Html","Each religious group has <br /> their own dietary practices... <br /><br />Learn more through the <br /> matching game on the next<br />page!") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'gIntroBody'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gIntroBtn", _view.gameIntroductionModal) // EJsS HtmlView.HtmlView Page: declaration of element 'gIntroBtn'
      .setProperty("ClassName","custom-button") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gIntroBtn'
      .setProperty("Html","NEXT") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'gIntroBtn'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameScreen", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'gameScreen'
      .setProperty("ClassName","d-none container flex-column justify-content-center") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameScreen'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"stage1", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'stage1'
      .setProperty("ClassName","d-block") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'stage1'
      .setProperty("Html","<div class=\"container text-center\">    <div class=\"row religion-pictures\">       <div class=\"col-4\">          <img class=\"religion-images\" id=\"judaismPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/juda-pic.svg\" alt=\"Juda\" />                 <div class=\"d-flex justify-content-center flex-column align-items-center\">                      <input type=\"radio\" id=\"judaismIcon\" name=\"card\" value=\"judaism\" />                      <label for=\"judaismIcon\">xx</label>                 </div>       </div>       <div class=\"col-4\">          <img class=\"religion-images\" id=\"zoroastrianPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/zoro-pic.svg\" alt=\"Zoro\" />                 <div class=\"d-flex justify-content-center flex-column align-items-center\">                     <input type=\"radio\" id=\"zoroastrianIcon\" name=\"card\" value=\"zoroastrian\" />                     <label for=\"zoroastrianIcon\">xx</label>                 </div>       </div>       <div class=\"col-4\">          <img class=\"religion-images\" id=\"hinduismPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/hindu-pic.svg\" alt=\"Hindu\" />                 <div class=\"d-flex justify-content-center flex-column align-items-center\">                     <input type=\"radio\" id=\"hinduismIcon\" name=\"card\" value=\"hinduism\" />                     <label for=\"hinduismIcon\">xx</label>                 </div>       </div>    </div>    <div class=\"row\">       <canvas id=\"my-canvas-1\" width=\"720\" height=\"0\"></canvas>    </div>    <div class=\"row religion-labels\">       <div class=\"col-4 position-relative\">          <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"hinduismText\" name=\"match\" value=\"hinduism\" />           <label for=\"hinduismText\">xx</label>            </div>          <img class=\"religion-names\" id=\"hinduismName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/hindu-name.svg\" alt=\"Hindu\" />            <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"hinduism-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>       <div class=\"col-4 position-relative\">         <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"judaismText\" name=\"match\" value=\"judaism\" />           <label for=\"judaismText\">xx</label>         </div>         <img class=\"religion-names\" id=\"judaismName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/juda-name.svg\" alt=\"Juda\" />         <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"judaism-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>       <div class=\"col-4 position-relative\">         <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"zoroastrianText\" name=\"match\" value=\"zoroastrian\" />           <label for=\"zoroastrianText\">xx</label>         </div>         <img class=\"religion-names\" id=\"zoroastrianName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/zoro-name.svg\" alt=\"Zoro\" />         <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"zoroastrian-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>           </div> </div>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'stage1'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"stage2", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'stage2'
      .setProperty("ClassName","d-none") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'stage2'
      .setProperty("Html","<div class=\"container text-center\">    <div class=\"row religion-pictures\">       <div class=\"col-4\">          <img class=\"religion-images\" id=\"jainismPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/jainism-pic.svg\" alt=\"Jainism\" />          <div class=\"d-flex justify-content-center flex-column align-items-center\">                      <input type=\"radio\" id=\"jainismIcon\" name=\"card\" value=\"jainism\" />                  <label for=\"jainismIcon\">xx</label>              </div>       </div>       <div class=\"col-4\">          <img class=\"religion-images\" id=\"taoismPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/taoism-pic.svg\" alt=\"Taoism\" />               <div class=\"d-flex justify-content-center flex-column align-items-center\">                     <input type=\"radio\" id=\"taoismIcon\" name=\"card\" value=\"taoism\" />             <label for=\"taoismIcon\">xx</label>           </div>       </div>              <div class=\"col-4\">          <img class=\"religion-images\" id=\"buddhismPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/buddhism-pic.svg\" alt=\"Buddhism\" />             <div class=\"d-flex justify-content-center flex-column align-items-center\">                     <input type=\"radio\" id=\"buddhismIcon\" name=\"card\" value=\"buddhism\" />             <label for=\"buddhismIcon\">xx</label>                </div>       </div>    </div>            <div class=\"row\">       <canvas id=\"my-canvas-2\" width=\"720\" height=\"0\"></canvas>    </div>            <div class=\"row religion-labels\">       <div class=\"col-4 position-relative\">          <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"buddhismText\" name=\"match\" value=\"buddhism\" />           <label for=\"buddhismText\">xx</label>           </div>          <img class=\"religion-names\" id=\"buddhismName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/buddhism-name.svg\" alt=\"Buddhism\" />              <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"buddhism-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />               </div>              <div class=\"col-4 position-relative\">         <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"taoismText\" name=\"match\" value=\"taoism\" />           <label for=\"taoismText\">xx</label>         </div>         <img class=\"religion-names\" id=\"taoismName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/taoism-name.svg\" alt=\"Taoism\" />         <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"taoism-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>       <div class=\"col-4 position-relative\">         <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"jainismText\" name=\"match\" value=\"jainism\" />           <label for=\"jainismText\">xx</label>         </div>         <img class=\"religion-names\" id=\"jainismName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/jainism-name.svg\" alt=\"Juda\" />         <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"jainism-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>    </div> </div>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'stage2'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"stage3", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'stage3'
      .setProperty("ClassName","d-none") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'stage3'
      .setProperty("Html","<div class=\"container text-center\">    <div class=\"row religion-pictures\">       <div class=\"col-3\">          <img class=\"religion-images\" id=\"sikhismPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/sikhism-pic.svg\" alt=\"Sikhism\" />          <div class=\"d-flex justify-content-center flex-column align-items-center\">                      <input type=\"radio\" id=\"sikhismIcon\" name=\"card\" value=\"sikhism\" />                  <label for=\"sikhismIcon\">xx</label>              </div>       </div>       <div class=\"col-3\">          <img class=\"religion-images\" id=\"bahaiPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/baha-pic.svg\" alt=\"Bahai\" />               <div class=\"d-flex justify-content-center flex-column align-items-center\">                     <input type=\"radio\" id=\"bahaiIcon\" name=\"card\" value=\"bahai\" />             <label for=\"bahaiIcon\">xx</label>           </div>       </div>              <div class=\"col-3\">          <img class=\"religion-images\" id=\"islamPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/islam-pic.svg\" alt=\"Islam\" />             <div class=\"d-flex justify-content-center flex-column align-items-center\">                     <input type=\"radio\" id=\"islamIcon\" name=\"card\" value=\"islam\" />             <label for=\"islamIcon\">xx</label>                </div>       </div>                     <div class=\"col-3\">          <img class=\"religion-images\" id=\"christianityPic\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/christianity-pic.svg\" alt=\"Christianity\" />             <div class=\"d-flex justify-content-center flex-column align-items-center\">                     <input type=\"radio\" id=\"christianityIcon\" name=\"card\" value=\"christianity\" />             <label for=\"christianityIcon\">xx</label>                </div>       </div>    </div>            <div class=\"row\">       <canvas id=\"my-canvas-3\" width=\"720\" height=\"0\"></canvas>    </div>            <div class=\"row religion-labels\">       <div class=\"col-3 position-relative\">          <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"christianityText\" name=\"match\" value=\"christianity\" />           <label for=\"christianityText\">xx</label>           </div>          <img class=\"religion-names\" id=\"christianityName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/christianity-name.svg\" alt=\"Christian\" />            <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"christianity-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>              <div class=\"col-3 position-relative\">         <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"islamText\" name=\"match\" value=\"islam\" />           <label for=\"islamText\">xx</label>         </div>         <img class=\"religion-names\" id=\"islamName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/islam-name.svg\" alt=\"Islam\" />         <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"islam-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>       <div class=\"col-3 position-relative\">         <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"sikhismText\" name=\"match\" value=\"sikhism\" />           <label for=\"sikhismText\">xx</label>         </div>         <img class=\"religion-names\" id=\"sikhismName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/sikhism-name.svg\" alt=\"Sikhism\" />         <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"sikhism-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>              <div class=\"col-3 position-relative\">         <div class=\"d-flex justify-content-center flex-column-reverse align-items-center\">                     <input type=\"radio\" id=\"bahaiText\" name=\"match\" value=\"bahai\" />           <label for=\"bahaiText\">xx</label>         </div>         <img class=\"religion-names\" id=\"bahaiName\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/baha-name.svg\" alt=\"Bahai\" />         <img class=\"opacity-0 position-absolute bottom-0 start-75 speech-bubble\" id=\"bahai-sb\" src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/speech_bubble.svg\" />       </div>    </div> </div>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'stage3'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"bottomInfo", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'bottomInfo'
      .setProperty("Display","flex") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'bottomInfo'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"_21CCName", _view.bottomInfo) // EJsS HtmlView.HtmlView Page: declaration of element '_21CCName'
      .setProperty("Html","<svg width=\"313\" height=\"60\" viewBox=\"0 0 313 60\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <g filter=\"url(#filter0_d_1_2)\"> <path d=\"M0 0H288C299.046 0 308 8.95431 308 20V55H20C8.95431 55 0 46.0457 0 35V0Z\" fill=\"white\"/> <path d=\"M19.3051 36.132C18.3958 36.132 17.5524 35.9707 16.7751 35.648C15.9978 35.3107 15.3744 34.7753 14.9051 34.042C14.4504 33.294 14.2231 32.304 14.2231 31.072V24.978C14.2231 23.746 14.4504 22.7633 14.9051 22.03C15.3744 21.282 15.9978 20.7467 16.7751 20.424C17.5524 20.0867 18.4031 19.918 19.3271 19.918C20.3538 19.918 21.2558 20.094 22.0331 20.446C22.8251 20.7833 23.4411 21.26 23.8811 21.876C24.3358 22.492 24.5631 23.2327 24.5631 24.098C24.5631 24.67 24.4458 25.0513 24.2111 25.242C23.9764 25.418 23.6171 25.506 23.1331 25.506C22.7371 25.506 22.3998 25.44 22.1211 25.308C21.8571 25.1613 21.7178 24.9267 21.7031 24.604C21.7031 24.428 21.6738 24.2227 21.6151 23.988C21.5711 23.7387 21.4758 23.4967 21.3291 23.262C21.1824 23.0273 20.9551 22.8293 20.6471 22.668C20.3538 22.5067 19.9431 22.426 19.4151 22.426C18.6671 22.426 18.0951 22.6387 17.6991 23.064C17.3031 23.4747 17.1051 24.1127 17.1051 24.978V31.072C17.1051 31.952 17.3031 32.5973 17.6991 33.008C18.1098 33.4187 18.6964 33.624 19.4591 33.624C19.9578 33.624 20.3538 33.5433 20.6471 33.382C20.9404 33.2207 21.1531 33.0227 21.2851 32.788C21.4318 32.5387 21.5271 32.282 21.5711 32.018C21.6298 31.754 21.6738 31.5047 21.7031 31.27C21.7324 30.918 21.8791 30.6833 22.1431 30.566C22.4071 30.434 22.7298 30.368 23.1111 30.368C23.6098 30.368 23.9764 30.4633 24.2111 30.654C24.4458 30.8447 24.5631 31.2187 24.5631 31.776C24.5631 32.656 24.3358 33.426 23.8811 34.086C23.4411 34.746 22.8251 35.252 22.0331 35.604C21.2411 35.956 20.3318 36.132 19.3051 36.132ZM35.3383 36.11C35.1476 36.11 34.957 36.0513 34.7663 35.934C34.5903 35.8167 34.451 35.648 34.3483 35.428L31.2243 29.356H29.3763V35.076C29.3763 35.384 29.2296 35.6187 28.9363 35.78C28.643 35.9267 28.313 36 27.9463 36C27.5943 36 27.2643 35.9267 26.9563 35.78C26.663 35.6187 26.5163 35.384 26.5163 35.076V20.82C26.5163 20.5707 26.597 20.358 26.7583 20.182C26.9343 20.006 27.1616 19.918 27.4403 19.918H31.7963C32.7643 19.918 33.637 20.0573 34.4143 20.336C35.2063 20.6147 35.837 21.0913 36.3063 21.766C36.7756 22.426 37.0103 23.3427 37.0103 24.516C37.0103 25.3667 36.8856 26.0927 36.6363 26.694C36.387 27.2807 36.0423 27.7573 35.6023 28.124C35.177 28.476 34.6856 28.74 34.1283 28.916L37.0323 34.262C37.0616 34.3207 37.0836 34.3867 37.0983 34.46C37.113 34.5187 37.1203 34.57 37.1203 34.614C37.1203 34.8487 37.0323 35.0833 36.8563 35.318C36.6803 35.5527 36.453 35.7433 36.1743 35.89C35.9103 36.0367 35.6316 36.11 35.3383 36.11ZM29.3763 27.112H31.7963C32.515 27.112 33.087 26.936 33.5123 26.584C33.9376 26.232 34.1503 25.6307 34.1503 24.78C34.1503 23.9 33.9376 23.2913 33.5123 22.954C33.087 22.602 32.515 22.426 31.7963 22.426H29.3763V27.112ZM44.0142 36.132C43.0462 36.132 42.1735 35.9707 41.3962 35.648C40.6189 35.3107 39.9955 34.7753 39.5262 34.042C39.0715 33.294 38.8442 32.304 38.8442 31.072V24.978C38.8442 23.746 39.0715 22.7633 39.5262 22.03C39.9955 21.282 40.6115 20.7467 41.3742 20.424C42.1515 20.0867 43.0315 19.918 44.0142 19.918C44.9822 19.918 45.8549 20.0867 46.6322 20.424C47.4242 20.7467 48.0475 21.282 48.5022 22.03C48.9569 22.7633 49.1842 23.746 49.1842 24.978V31.072C49.1842 32.304 48.9569 33.294 48.5022 34.042C48.0475 34.7753 47.4242 35.3107 46.6322 35.648C45.8549 35.9707 44.9822 36.132 44.0142 36.132ZM44.0142 33.624C44.7329 33.624 45.2975 33.4187 45.7082 33.008C46.1189 32.5973 46.3242 31.952 46.3242 31.072V24.978C46.3242 24.098 46.1189 23.4527 45.7082 23.042C45.2975 22.6313 44.7329 22.426 44.0142 22.426C43.2955 22.426 42.7309 22.6313 42.3202 23.042C41.9242 23.4527 41.7262 24.098 41.7262 24.978V31.072C41.7262 31.952 41.9242 32.5973 42.3202 33.008C42.7309 33.4187 43.2955 33.624 44.0142 33.624ZM55.943 36.198C54.9897 36.198 54.1243 36.0587 53.347 35.78C52.5843 35.5013 51.9757 35.1567 51.521 34.746C51.081 34.3207 50.861 33.8953 50.861 33.47C50.861 33.2647 50.9123 33.0447 51.015 32.81C51.1323 32.5607 51.2863 32.3553 51.477 32.194C51.6677 32.018 51.8803 31.93 52.115 31.93C52.3497 31.93 52.5697 32.018 52.775 32.194C52.9803 32.3553 53.215 32.5533 53.479 32.788C53.743 33.008 54.0657 33.206 54.447 33.382C54.8283 33.5433 55.2977 33.624 55.855 33.624C56.295 33.624 56.6983 33.558 57.065 33.426C57.4463 33.2793 57.747 33.0667 57.967 32.788C58.2017 32.5093 58.319 32.15 58.319 31.71C58.319 31.2407 58.1943 30.8447 57.945 30.522C57.6957 30.1993 57.3583 29.9207 56.933 29.686C56.5077 29.4513 56.0457 29.224 55.547 29.004C55.0483 28.784 54.5423 28.5493 54.029 28.3C53.5303 28.0507 53.0683 27.75 52.643 27.398C52.2323 27.046 51.895 26.6133 51.631 26.1C51.3817 25.5867 51.257 24.956 51.257 24.208C51.257 23.3867 51.411 22.6973 51.719 22.14C52.0417 21.5827 52.4597 21.1353 52.973 20.798C53.501 20.446 54.0803 20.1967 54.711 20.05C55.3417 19.8887 55.9723 19.808 56.603 19.808C56.9403 19.808 57.3363 19.8373 57.791 19.896C58.2603 19.94 58.7223 20.028 59.177 20.16C59.6463 20.292 60.0277 20.4753 60.321 20.71C60.629 20.93 60.783 21.2233 60.783 21.59C60.783 21.7513 60.739 21.9493 60.651 22.184C60.5777 22.4187 60.453 22.6313 60.277 22.822C60.1157 23.0127 59.903 23.108 59.639 23.108C59.4043 23.108 59.1697 23.042 58.935 22.91C58.715 22.7633 58.4217 22.624 58.055 22.492C57.703 22.3453 57.219 22.272 56.603 22.272C56.0897 22.272 55.6423 22.338 55.261 22.47C54.8797 22.602 54.5937 22.7927 54.403 23.042C54.2123 23.2767 54.117 23.5773 54.117 23.944C54.117 24.3253 54.2417 24.648 54.491 24.912C54.755 25.176 55.0923 25.4107 55.503 25.616C55.9283 25.8213 56.3903 26.0267 56.889 26.232C57.3877 26.4373 57.8863 26.6793 58.385 26.958C58.8983 27.222 59.3677 27.5447 59.793 27.926C60.2183 28.3073 60.5557 28.784 60.805 29.356C61.0543 29.9133 61.179 30.6027 61.179 31.424C61.179 32.4653 60.9517 33.3453 60.497 34.064C60.0423 34.768 59.419 35.3033 58.627 35.67C57.8497 36.022 56.955 36.198 55.943 36.198ZM67.4371 36.198C66.4838 36.198 65.6185 36.0587 64.8411 35.78C64.0785 35.5013 63.4698 35.1567 63.0151 34.746C62.5751 34.3207 62.3551 33.8953 62.3551 33.47C62.3551 33.2647 62.4065 33.0447 62.5091 32.81C62.6265 32.5607 62.7805 32.3553 62.9711 32.194C63.1618 32.018 63.3745 31.93 63.6091 31.93C63.8438 31.93 64.0638 32.018 64.2691 32.194C64.4745 32.3553 64.7091 32.5533 64.9731 32.788C65.2371 33.008 65.5598 33.206 65.9411 33.382C66.3225 33.5433 66.7918 33.624 67.3491 33.624C67.7891 33.624 68.1925 33.558 68.5591 33.426C68.9405 33.2793 69.2411 33.0667 69.4611 32.788C69.6958 32.5093 69.8131 32.15 69.8131 31.71C69.8131 31.2407 69.6885 30.8447 69.4391 30.522C69.1898 30.1993 68.8525 29.9207 68.4271 29.686C68.0018 29.4513 67.5398 29.224 67.0411 29.004C66.5425 28.784 66.0365 28.5493 65.5231 28.3C65.0245 28.0507 64.5625 27.75 64.1371 27.398C63.7265 27.046 63.3891 26.6133 63.1251 26.1C62.8758 25.5867 62.7511 24.956 62.7511 24.208C62.7511 23.3867 62.9051 22.6973 63.2131 22.14C63.5358 21.5827 63.9538 21.1353 64.4671 20.798C64.9951 20.446 65.5745 20.1967 66.2051 20.05C66.8358 19.8887 67.4665 19.808 68.0971 19.808C68.4345 19.808 68.8305 19.8373 69.2851 19.896C69.7545 19.94 70.2165 20.028 70.6711 20.16C71.1405 20.292 71.5218 20.4753 71.8151 20.71C72.1231 20.93 72.2771 21.2233 72.2771 21.59C72.2771 21.7513 72.2331 21.9493 72.1451 22.184C72.0718 22.4187 71.9471 22.6313 71.7711 22.822C71.6098 23.0127 71.3971 23.108 71.1331 23.108C70.8985 23.108 70.6638 23.042 70.4291 22.91C70.2091 22.7633 69.9158 22.624 69.5491 22.492C69.1971 22.3453 68.7131 22.272 68.0971 22.272C67.5838 22.272 67.1365 22.338 66.7551 22.47C66.3738 22.602 66.0878 22.7927 65.8971 23.042C65.7065 23.2767 65.6111 23.5773 65.6111 23.944C65.6111 24.3253 65.7358 24.648 65.9851 24.912C66.2491 25.176 66.5865 25.4107 66.9971 25.616C67.4225 25.8213 67.8845 26.0267 68.3831 26.232C68.8818 26.4373 69.3805 26.6793 69.8791 26.958C70.3925 27.222 70.8618 27.5447 71.2871 27.926C71.7125 28.3073 72.0498 28.784 72.2991 29.356C72.5485 29.9133 72.6731 30.6027 72.6731 31.424C72.6731 32.4653 72.4458 33.3453 71.9911 34.064C71.5365 34.768 70.9131 35.3033 70.1211 35.67C69.3438 36.022 68.4491 36.198 67.4371 36.198ZM74.9933 31.886C74.7293 31.886 74.5093 31.776 74.3333 31.556C74.172 31.336 74.0913 31.0573 74.0913 30.72C74.0913 30.3827 74.172 30.104 74.3333 29.884C74.5093 29.6493 74.7293 29.532 74.9933 29.532H80.7133C80.9333 29.532 81.1386 29.6493 81.3293 29.884C81.52 30.104 81.6153 30.3827 81.6153 30.72C81.6153 31.0573 81.52 31.336 81.3293 31.556C81.1386 31.776 80.9333 31.886 80.7133 31.886H74.9933ZM88.5922 36.132C87.6829 36.132 86.8395 35.9707 86.0622 35.648C85.2849 35.3107 84.6615 34.7753 84.1922 34.042C83.7375 33.294 83.5102 32.304 83.5102 31.072V24.978C83.5102 23.746 83.7375 22.7633 84.1922 22.03C84.6615 21.282 85.2849 20.7467 86.0622 20.424C86.8395 20.0867 87.6902 19.918 88.6142 19.918C89.6409 19.918 90.5429 20.094 91.3202 20.446C92.1122 20.7833 92.7282 21.26 93.1682 21.876C93.6229 22.492 93.8502 23.2327 93.8502 24.098C93.8502 24.67 93.7329 25.0513 93.4982 25.242C93.2635 25.418 92.9042 25.506 92.4202 25.506C92.0242 25.506 91.6869 25.44 91.4082 25.308C91.1442 25.1613 91.0049 24.9267 90.9902 24.604C90.9902 24.428 90.9609 24.2227 90.9022 23.988C90.8582 23.7387 90.7629 23.4967 90.6162 23.262C90.4695 23.0273 90.2422 22.8293 89.9342 22.668C89.6409 22.5067 89.2302 22.426 88.7022 22.426C87.9542 22.426 87.3822 22.6387 86.9862 23.064C86.5902 23.4747 86.3922 24.1127 86.3922 24.978V31.072C86.3922 31.952 86.5902 32.5973 86.9862 33.008C87.3969 33.4187 87.9835 33.624 88.7462 33.624C89.2449 33.624 89.6409 33.5433 89.9342 33.382C90.2275 33.2207 90.4402 33.0227 90.5722 32.788C90.7189 32.5387 90.8142 32.282 90.8582 32.018C90.9169 31.754 90.9609 31.5047 90.9902 31.27C91.0195 30.918 91.1662 30.6833 91.4302 30.566C91.6942 30.434 92.0169 30.368 92.3982 30.368C92.8969 30.368 93.2635 30.4633 93.4982 30.654C93.7329 30.8447 93.8502 31.2187 93.8502 31.776C93.8502 32.656 93.6229 33.426 93.1682 34.086C92.7282 34.746 92.1122 35.252 91.3202 35.604C90.5282 35.956 89.6189 36.132 88.5922 36.132ZM101.017 36.132C100.02 36.132 99.1254 35.9707 98.3334 35.648C97.5414 35.3107 96.9107 34.7753 96.4414 34.042C95.9721 33.294 95.7374 32.304 95.7374 31.072V20.82C95.7374 20.4973 95.8841 20.27 96.1774 20.138C96.4707 19.9913 96.8007 19.918 97.1674 19.918C97.5194 19.918 97.8421 19.9913 98.1354 20.138C98.4434 20.27 98.5974 20.4973 98.5974 20.82V31.072C98.5974 31.9373 98.8101 32.5827 99.2354 33.008C99.6607 33.4187 100.255 33.624 101.017 33.624C101.765 33.624 102.352 33.4187 102.777 33.008C103.217 32.5827 103.437 31.9373 103.437 31.072V20.82C103.437 20.4973 103.577 20.27 103.855 20.138C104.149 19.9913 104.486 19.918 104.867 19.918C105.219 19.918 105.542 19.9913 105.835 20.138C106.143 20.27 106.297 20.4973 106.297 20.82V31.072C106.297 32.304 106.063 33.294 105.593 34.042C105.124 34.7753 104.486 35.3107 103.679 35.648C102.887 35.9707 102 36.132 101.017 36.132ZM110.12 36C109.812 36 109.526 35.9267 109.262 35.78C108.998 35.6187 108.866 35.384 108.866 35.076V20.82C108.866 20.4973 109.013 20.27 109.306 20.138C109.614 19.9913 109.944 19.918 110.296 19.918C110.663 19.918 110.993 19.9913 111.286 20.138C111.579 20.27 111.726 20.4973 111.726 20.82V33.492H117.116C117.409 33.492 117.622 33.624 117.754 33.888C117.886 34.1373 117.952 34.4233 117.952 34.746C117.952 35.054 117.886 35.34 117.754 35.604C117.622 35.868 117.409 36 117.116 36H110.12ZM121.839 36C121.473 36 121.143 35.9267 120.849 35.78C120.556 35.6187 120.409 35.384 120.409 35.076V22.492H117.175C116.897 22.492 116.677 22.36 116.515 22.096C116.354 21.832 116.273 21.5313 116.273 21.194C116.273 20.886 116.347 20.6 116.493 20.336C116.64 20.0573 116.867 19.918 117.175 19.918H126.481C126.804 19.918 127.031 20.0573 127.163 20.336C127.31 20.6 127.383 20.886 127.383 21.194C127.383 21.5313 127.303 21.832 127.141 22.096C126.995 22.36 126.775 22.492 126.481 22.492H123.269V35.076C123.269 35.384 123.115 35.6187 122.807 35.78C122.514 35.9267 122.191 36 121.839 36ZM134.125 36.132C133.127 36.132 132.233 35.9707 131.441 35.648C130.649 35.3107 130.018 34.7753 129.549 34.042C129.079 33.294 128.845 32.304 128.845 31.072V20.82C128.845 20.4973 128.991 20.27 129.285 20.138C129.578 19.9913 129.908 19.918 130.275 19.918C130.627 19.918 130.949 19.9913 131.243 20.138C131.551 20.27 131.705 20.4973 131.705 20.82V31.072C131.705 31.9373 131.917 32.5827 132.343 33.008C132.768 33.4187 133.362 33.624 134.125 33.624C134.873 33.624 135.459 33.4187 135.885 33.008C136.325 32.5827 136.545 31.9373 136.545 31.072V20.82C136.545 20.4973 136.684 20.27 136.963 20.138C137.256 19.9913 137.593 19.918 137.975 19.918C138.327 19.918 138.649 19.9913 138.943 20.138C139.251 20.27 139.405 20.4973 139.405 20.82V31.072C139.405 32.304 139.17 33.294 138.701 34.042C138.231 34.7753 137.593 35.3107 136.787 35.648C135.995 35.9707 135.107 36.132 134.125 36.132ZM150.795 36.11C150.605 36.11 150.414 36.0513 150.223 35.934C150.047 35.8167 149.908 35.648 149.805 35.428L146.681 29.356H144.833V35.076C144.833 35.384 144.687 35.6187 144.393 35.78C144.1 35.9267 143.77 36 143.403 36C143.051 36 142.721 35.9267 142.413 35.78C142.12 35.6187 141.973 35.384 141.973 35.076V20.82C141.973 20.5707 142.054 20.358 142.215 20.182C142.391 20.006 142.619 19.918 142.897 19.918H147.253C148.221 19.918 149.094 20.0573 149.871 20.336C150.663 20.6147 151.294 21.0913 151.763 21.766C152.233 22.426 152.467 23.3427 152.467 24.516C152.467 25.3667 152.343 26.0927 152.093 26.694C151.844 27.2807 151.499 27.7573 151.059 28.124C150.634 28.476 150.143 28.74 149.585 28.916L152.489 34.262C152.519 34.3207 152.541 34.3867 152.555 34.46C152.57 34.5187 152.577 34.57 152.577 34.614C152.577 34.8487 152.489 35.0833 152.313 35.318C152.137 35.5527 151.91 35.7433 151.631 35.89C151.367 36.0367 151.089 36.11 150.795 36.11ZM144.833 27.112H147.253C147.972 27.112 148.544 26.936 148.969 26.584C149.395 26.232 149.607 25.6307 149.607 24.78C149.607 23.9 149.395 23.2913 148.969 22.954C148.544 22.602 147.972 22.426 147.253 22.426H144.833V27.112ZM155.159 36C154.895 36 154.624 35.9487 154.345 35.846C154.067 35.7433 153.832 35.604 153.641 35.428C153.451 35.252 153.355 35.0467 153.355 34.812C153.355 34.768 153.363 34.6947 153.377 34.592L157.623 20.754C157.726 20.4313 157.953 20.1893 158.305 20.028C158.672 19.8667 159.061 19.786 159.471 19.786C159.897 19.786 160.285 19.8667 160.637 20.028C160.989 20.1893 161.217 20.4313 161.319 20.754L165.565 34.592C165.595 34.6947 165.609 34.768 165.609 34.812C165.609 35.032 165.507 35.2373 165.301 35.428C165.111 35.604 164.876 35.7433 164.597 35.846C164.319 35.9487 164.047 36 163.783 36C163.549 36 163.343 35.9633 163.167 35.89C163.006 35.802 162.896 35.648 162.837 35.428L162.001 32.502H156.941L156.127 35.428C156.069 35.648 155.951 35.802 155.775 35.89C155.599 35.9633 155.394 36 155.159 36ZM157.557 30.258H161.385L159.471 23.504L157.557 30.258ZM168.364 36C168.056 36 167.77 35.9267 167.506 35.78C167.242 35.6187 167.11 35.384 167.11 35.076V20.82C167.11 20.4973 167.257 20.27 167.55 20.138C167.858 19.9913 168.188 19.918 168.54 19.918C168.907 19.918 169.237 19.9913 169.53 20.138C169.823 20.27 169.97 20.4973 169.97 20.82V33.492H175.36C175.653 33.492 175.866 33.624 175.998 33.888C176.13 34.1373 176.196 34.4233 176.196 34.746C176.196 35.054 176.13 35.34 175.998 35.604C175.866 35.868 175.653 36 175.36 36H168.364ZM182.831 36C182.567 36 182.296 35.9487 182.017 35.846C181.738 35.7433 181.504 35.604 181.313 35.428C181.122 35.252 181.027 35.0467 181.027 34.812C181.027 34.768 181.034 34.6947 181.049 34.592L185.295 20.754C185.398 20.4313 185.625 20.1893 185.977 20.028C186.344 19.8667 186.732 19.786 187.143 19.786C187.568 19.786 187.957 19.8667 188.309 20.028C188.661 20.1893 188.888 20.4313 188.991 20.754L193.237 34.592C193.266 34.6947 193.281 34.768 193.281 34.812C193.281 35.032 193.178 35.2373 192.973 35.428C192.782 35.604 192.548 35.7433 192.269 35.846C191.99 35.9487 191.719 36 191.455 36C191.22 36 191.015 35.9633 190.839 35.89C190.678 35.802 190.568 35.648 190.509 35.428L189.673 32.502H184.613L183.799 35.428C183.74 35.648 183.623 35.802 183.447 35.89C183.271 35.9633 183.066 36 182.831 36ZM185.229 30.258H189.057L187.143 23.504L185.229 30.258ZM199.049 36.132C198.638 36.132 198.249 36.0513 197.883 35.89C197.516 35.7287 197.281 35.4867 197.179 35.164L192.823 21.326C192.793 21.238 192.779 21.15 192.779 21.062C192.779 20.842 192.874 20.6513 193.065 20.49C193.255 20.314 193.49 20.1747 193.769 20.072C194.062 19.9693 194.341 19.918 194.605 19.918C194.825 19.918 195.023 19.962 195.199 20.05C195.389 20.138 195.507 20.2847 195.551 20.49L199.027 32.414L200.897 24.758C200.97 24.494 201.139 24.296 201.403 24.164C201.681 24.032 201.982 23.966 202.305 23.966C202.627 23.966 202.921 24.032 203.185 24.164C203.463 24.296 203.632 24.494 203.691 24.758L205.561 32.414L209.037 20.49C209.095 20.2847 209.213 20.138 209.389 20.05C209.565 19.962 209.763 19.918 209.983 19.918C210.261 19.918 210.54 19.9693 210.819 20.072C211.097 20.1747 211.332 20.314 211.523 20.49C211.713 20.6513 211.809 20.842 211.809 21.062C211.809 21.15 211.794 21.238 211.765 21.326L207.409 35.164C207.291 35.4867 207.057 35.7287 206.705 35.89C206.353 36.0513 205.964 36.132 205.539 36.132C205.128 36.132 204.739 36.0513 204.373 35.89C204.006 35.7287 203.786 35.4867 203.713 35.164L202.305 29.224L200.875 35.164C200.801 35.4867 200.581 35.7287 200.215 35.89C199.848 36.0513 199.459 36.132 199.049 36.132ZM213.124 36C212.86 36 212.589 35.9487 212.31 35.846C212.031 35.7433 211.797 35.604 211.606 35.428C211.415 35.252 211.32 35.0467 211.32 34.812C211.32 34.768 211.327 34.6947 211.342 34.592L215.588 20.754C215.691 20.4313 215.918 20.1893 216.27 20.028C216.637 19.8667 217.025 19.786 217.436 19.786C217.861 19.786 218.25 19.8667 218.602 20.028C218.954 20.1893 219.181 20.4313 219.284 20.754L223.53 34.592C223.559 34.6947 223.574 34.768 223.574 34.812C223.574 35.032 223.471 35.2373 223.266 35.428C223.075 35.604 222.841 35.7433 222.562 35.846C222.283 35.9487 222.012 36 221.748 36C221.513 36 221.308 35.9633 221.132 35.89C220.971 35.802 220.861 35.648 220.802 35.428L219.966 32.502H214.906L214.092 35.428C214.033 35.648 213.916 35.802 213.74 35.89C213.564 35.9633 213.359 36 213.124 36ZM215.522 30.258H219.35L217.436 23.504L215.522 30.258ZM233.897 36.11C233.706 36.11 233.516 36.0513 233.325 35.934C233.149 35.8167 233.01 35.648 232.907 35.428L229.783 29.356H227.935V35.076C227.935 35.384 227.788 35.6187 227.495 35.78C227.202 35.9267 226.872 36 226.505 36C226.153 36 225.823 35.9267 225.515 35.78C225.222 35.6187 225.075 35.384 225.075 35.076V20.82C225.075 20.5707 225.156 20.358 225.317 20.182C225.493 20.006 225.72 19.918 225.999 19.918H230.355C231.323 19.918 232.196 20.0573 232.973 20.336C233.765 20.6147 234.396 21.0913 234.865 21.766C235.334 22.426 235.569 23.3427 235.569 24.516C235.569 25.3667 235.444 26.0927 235.195 26.694C234.946 27.2807 234.601 27.7573 234.161 28.124C233.736 28.476 233.244 28.74 232.687 28.916L235.591 34.262C235.62 34.3207 235.642 34.3867 235.657 34.46C235.672 34.5187 235.679 34.57 235.679 34.614C235.679 34.8487 235.591 35.0833 235.415 35.318C235.239 35.5527 235.012 35.7433 234.733 35.89C234.469 36.0367 234.19 36.11 233.897 36.11ZM227.935 27.112H230.355C231.074 27.112 231.646 26.936 232.071 26.584C232.496 26.232 232.709 25.6307 232.709 24.78C232.709 23.9 232.496 23.2913 232.071 22.954C231.646 22.602 231.074 22.426 230.355 22.426H227.935V27.112ZM238.833 36C238.525 36 238.239 35.9267 237.975 35.78C237.711 35.6187 237.579 35.384 237.579 35.076V20.842C237.579 20.534 237.711 20.3067 237.975 20.16C238.239 19.9987 238.525 19.918 238.833 19.918H246.665C246.987 19.918 247.215 20.05 247.347 20.314C247.493 20.578 247.567 20.8567 247.567 21.15C247.567 21.502 247.486 21.8027 247.325 22.052C247.178 22.3013 246.958 22.426 246.665 22.426H240.439V26.826H243.783C244.076 26.826 244.296 26.9433 244.443 27.178C244.604 27.398 244.685 27.662 244.685 27.97C244.685 28.2193 244.611 28.4687 244.465 28.718C244.333 28.9527 244.105 29.07 243.783 29.07H240.439V33.492H246.665C246.958 33.492 247.178 33.6167 247.325 33.866C247.486 34.1153 247.567 34.416 247.567 34.768C247.567 35.0613 247.493 35.34 247.347 35.604C247.215 35.868 246.987 36 246.665 36H238.833ZM250.675 36C250.323 36 249.993 35.9267 249.685 35.78C249.391 35.6187 249.245 35.384 249.245 35.076V20.82C249.245 20.512 249.391 20.2847 249.685 20.138C249.993 19.9913 250.323 19.918 250.675 19.918C251.027 19.918 251.313 19.9547 251.533 20.028C251.767 20.1013 251.98 20.248 252.171 20.468C252.376 20.6733 252.589 20.996 252.809 21.436L257.055 29.642V20.82C257.055 20.4973 257.201 20.27 257.495 20.138C257.803 19.9913 258.133 19.918 258.485 19.918C258.851 19.918 259.181 19.9913 259.475 20.138C259.768 20.27 259.915 20.4973 259.915 20.82V35.076C259.915 35.384 259.768 35.6187 259.475 35.78C259.181 35.9267 258.851 36 258.485 36C258.147 36 257.832 35.934 257.539 35.802C257.26 35.67 257.033 35.4353 256.857 35.098L252.105 26.254V35.076C252.105 35.384 251.958 35.6187 251.665 35.78C251.371 35.9267 251.041 36 250.675 36ZM263.841 36C263.533 36 263.247 35.9267 262.983 35.78C262.719 35.6187 262.587 35.384 262.587 35.076V20.842C262.587 20.534 262.719 20.3067 262.983 20.16C263.247 19.9987 263.533 19.918 263.841 19.918H271.673C271.995 19.918 272.223 20.05 272.355 20.314C272.501 20.578 272.575 20.8567 272.575 21.15C272.575 21.502 272.494 21.8027 272.333 22.052C272.186 22.3013 271.966 22.426 271.673 22.426H265.447V26.826H268.791C269.084 26.826 269.304 26.9433 269.451 27.178C269.612 27.398 269.693 27.662 269.693 27.97C269.693 28.2193 269.619 28.4687 269.473 28.718C269.341 28.9527 269.113 29.07 268.791 29.07H265.447V33.492H271.673C271.966 33.492 272.186 33.6167 272.333 33.866C272.494 34.1153 272.575 34.416 272.575 34.768C272.575 35.0613 272.501 35.34 272.355 35.604C272.223 35.868 271.995 36 271.673 36H263.841ZM278.543 36.198C277.589 36.198 276.724 36.0587 275.947 35.78C275.184 35.5013 274.575 35.1567 274.121 34.746C273.681 34.3207 273.461 33.8953 273.461 33.47C273.461 33.2647 273.512 33.0447 273.615 32.81C273.732 32.5607 273.886 32.3553 274.077 32.194C274.267 32.018 274.48 31.93 274.715 31.93C274.949 31.93 275.169 32.018 275.375 32.194C275.58 32.3553 275.815 32.5533 276.079 32.788C276.343 33.008 276.665 33.206 277.047 33.382C277.428 33.5433 277.897 33.624 278.455 33.624C278.895 33.624 279.298 33.558 279.665 33.426C280.046 33.2793 280.347 33.0667 280.567 32.788C280.801 32.5093 280.919 32.15 280.919 31.71C280.919 31.2407 280.794 30.8447 280.545 30.522C280.295 30.1993 279.958 29.9207 279.533 29.686C279.107 29.4513 278.645 29.224 278.147 29.004C277.648 28.784 277.142 28.5493 276.629 28.3C276.13 28.0507 275.668 27.75 275.243 27.398C274.832 27.046 274.495 26.6133 274.231 26.1C273.981 25.5867 273.857 24.956 273.857 24.208C273.857 23.3867 274.011 22.6973 274.319 22.14C274.641 21.5827 275.059 21.1353 275.573 20.798C276.101 20.446 276.68 20.1967 277.311 20.05C277.941 19.8887 278.572 19.808 279.203 19.808C279.54 19.808 279.936 19.8373 280.391 19.896C280.86 19.94 281.322 20.028 281.777 20.16C282.246 20.292 282.627 20.4753 282.921 20.71C283.229 20.93 283.383 21.2233 283.383 21.59C283.383 21.7513 283.339 21.9493 283.251 22.184C283.177 22.4187 283.053 22.6313 282.877 22.822C282.715 23.0127 282.503 23.108 282.239 23.108C282.004 23.108 281.769 23.042 281.535 22.91C281.315 22.7633 281.021 22.624 280.655 22.492C280.303 22.3453 279.819 22.272 279.203 22.272C278.689 22.272 278.242 22.338 277.861 22.47C277.479 22.602 277.193 22.7927 277.003 23.042C276.812 23.2767 276.717 23.5773 276.717 23.944C276.717 24.3253 276.841 24.648 277.091 24.912C277.355 25.176 277.692 25.4107 278.103 25.616C278.528 25.8213 278.99 26.0267 279.489 26.232C279.987 26.4373 280.486 26.6793 280.985 26.958C281.498 27.222 281.967 27.5447 282.393 27.926C282.818 28.3073 283.155 28.784 283.405 29.356C283.654 29.9133 283.779 30.6027 283.779 31.424C283.779 32.4653 283.551 33.3453 283.097 34.064C282.642 34.768 282.019 35.3033 281.227 35.67C280.449 36.022 279.555 36.198 278.543 36.198ZM290.037 36.198C289.083 36.198 288.218 36.0587 287.441 35.78C286.678 35.5013 286.069 35.1567 285.615 34.746C285.175 34.3207 284.955 33.8953 284.955 33.47C284.955 33.2647 285.006 33.0447 285.109 32.81C285.226 32.5607 285.38 32.3553 285.571 32.194C285.761 32.018 285.974 31.93 286.209 31.93C286.443 31.93 286.663 32.018 286.869 32.194C287.074 32.3553 287.309 32.5533 287.573 32.788C287.837 33.008 288.159 33.206 288.541 33.382C288.922 33.5433 289.391 33.624 289.949 33.624C290.389 33.624 290.792 33.558 291.159 33.426C291.54 33.2793 291.841 33.0667 292.061 32.788C292.295 32.5093 292.413 32.15 292.413 31.71C292.413 31.2407 292.288 30.8447 292.039 30.522C291.789 30.1993 291.452 29.9207 291.027 29.686C290.601 29.4513 290.139 29.224 289.641 29.004C289.142 28.784 288.636 28.5493 288.123 28.3C287.624 28.0507 287.162 27.75 286.737 27.398C286.326 27.046 285.989 26.6133 285.725 26.1C285.475 25.5867 285.351 24.956 285.351 24.208C285.351 23.3867 285.505 22.6973 285.813 22.14C286.135 21.5827 286.553 21.1353 287.067 20.798C287.595 20.446 288.174 20.1967 288.805 20.05C289.435 19.8887 290.066 19.808 290.697 19.808C291.034 19.808 291.43 19.8373 291.885 19.896C292.354 19.94 292.816 20.028 293.271 20.16C293.74 20.292 294.121 20.4753 294.415 20.71C294.723 20.93 294.877 21.2233 294.877 21.59C294.877 21.7513 294.833 21.9493 294.745 22.184C294.671 22.4187 294.547 22.6313 294.371 22.822C294.209 23.0127 293.997 23.108 293.733 23.108C293.498 23.108 293.263 23.042 293.029 22.91C292.809 22.7633 292.515 22.624 292.149 22.492C291.797 22.3453 291.313 22.272 290.697 22.272C290.183 22.272 289.736 22.338 289.355 22.47C288.973 22.602 288.687 22.7927 288.497 23.042C288.306 23.2767 288.211 23.5773 288.211 23.944C288.211 24.3253 288.335 24.648 288.585 24.912C288.849 25.176 289.186 25.4107 289.597 25.616C290.022 25.8213 290.484 26.0267 290.983 26.232C291.481 26.4373 291.98 26.6793 292.479 26.958C292.992 27.222 293.461 27.5447 293.887 27.926C294.312 28.3073 294.649 28.784 294.899 29.356C295.148 29.9133 295.273 30.6027 295.273 31.424C295.273 32.4653 295.045 33.3453 294.591 34.064C294.136 34.768 293.513 35.3033 292.721 35.67C291.943 36.022 291.049 36.198 290.037 36.198Z\" fill=\"#FF0082\"/> <path d=\"M1.5 1.5H288C298.217 1.5 306.5 9.78273 306.5 20V53.5H20C9.78274 53.5 1.5 45.2173 1.5 35V1.5Z\" stroke=\"#F7CFE5\" stroke-width=\"3\"/> </g> <defs> <filter id=\"filter0_d_1_2\" x=\"0\" y=\"0\" width=\"313\" height=\"60\" filterUnits=\"userSpaceOnUse\" color-interpolation-filters=\"sRGB\"> <feFlood flood-opacity=\"0\" result=\"BackgroundImageFix\"/> <feColorMatrix in=\"SourceAlpha\" type=\"matrix\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0\" result=\"hardAlpha\"/> <feOffset dx=\"5\" dy=\"5\"/> <feComposite in2=\"hardAlpha\" operator=\"out\"/> <feColorMatrix type=\"matrix\" values=\"0 0 0 0 0.956863 0 0 0 0 0.490196 0 0 0 0 0.380392 0 0 0 1 0\"/> <feBlend mode=\"normal\" in2=\"BackgroundImageFix\" result=\"effect1_dropShadow_1_2\"/> <feBlend mode=\"normal\" in=\"SourceGraphic\" in2=\"effect1_dropShadow_1_2\" result=\"shape\"/> </filter> </defs> </svg>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element '_21CCName'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"progressBarContainer", _view.bottomInfo) // EJsS HtmlView.HtmlView Page: declaration of element 'progressBarContainer'
      .setProperty("Html","<div id=\"progressBar\">     <div id=\"progressLevel\" class=\"emptybar\" style=\"width: 0; transition: .1s linear; margin-bottom: 40px\"></div>     <div class=\"divider\"></div>     <img src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/progress-checkmark.svg\" alt=\"progress checkmark\" />     <div class=\"divider\"></div>     <img src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/religion/progress-checkmark.svg\" alt=\"progress checkmark\" />     <div class=\"divider\"></div>   </div>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'progressBarContainer'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"overlay", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'overlay'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'overlay'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"religionDescriptionModal", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'religionDescriptionModal'
      .setProperty("ClassName","position-absolute top-50 start-50 translate-middle w-50 h-50 d-none custom-container") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'religionDescriptionModal'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"rdTitle", _view.religionDescriptionModal) // EJsS HtmlView.HtmlView Page: declaration of element 'rdTitle'
      .setProperty("Html","Opps..") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'rdTitle'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"rdBodyWrapper", _view.religionDescriptionModal) // EJsS HtmlView.HtmlView Page: declaration of element 'rdBodyWrapper'
      .setProperty("ClassName","d-flex align-items-center") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'rdBodyWrapper'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"rdBody", _view.rdBodyWrapper) // EJsS HtmlView.HtmlView Page: declaration of element 'rdBody'
      .setProperty("Html","Lorem Ipsum..") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'rdBody'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"rdBtn", _view.religionDescriptionModal) // EJsS HtmlView.HtmlView Page: declaration of element 'rdBtn'
      .setProperty("ClassName","justify-content-center custom-button") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'rdBtn'
      .setProperty("Html","CONTINUE") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'rdBtn'
      .setProperty("Display","flex") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'rdBtn'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"stageClearedModal", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'stageClearedModal'
      .setProperty("ClassName","position-absolute top-50 start-50 translate-middle w-50 h-50 d-none custom-container justify-content-between") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'stageClearedModal'
      .setProperty("Display","none") // EJsS HtmlView.HtmlView Page: setting property 'Display' for element 'stageClearedModal'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"scTitle", _view.stageClearedModal) // EJsS HtmlView.HtmlView Page: declaration of element 'scTitle'
      .setProperty("Html","You are off to a great start!") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'scTitle'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"scBody", _view.stageClearedModal) // EJsS HtmlView.HtmlView Page: declaration of element 'scBody'
      .setProperty("Html","Can you keep up with your streak to match the next 3 religions?") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'scBody'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"scBtn", _view.stageClearedModal) // EJsS HtmlView.HtmlView Page: declaration of element 'scBtn'
      .setProperty("ClassName","custom-button") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'scBtn'
      .setProperty("Html","CONTINUE") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'scBtn'
      ;

    _view._addElement(EJSS_INTERFACE.audio,"backgroundMusic", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'backgroundMusic'
      .setProperty("Loop",true) // EJsS HtmlView.HtmlView Page: setting property 'Loop' for element 'backgroundMusic'
      .setProperty("Volume",0.3) // EJsS HtmlView.HtmlView Page: setting property 'Volume' for element 'backgroundMusic'
      .setProperty("AudioUrl","./cross_cultural/assets/audio/Komiku_-_13_-_Good_Fellow.mp3") // EJsS HtmlView.HtmlView Page: setting property 'AudioUrl' for element 'backgroundMusic'
      ;

    _view._addElement(EJSS_INTERFACE.audio,"correctSound", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'correctSound'
      .setProperty("AudioUrl","./cross_cultural/assets/audio/correct.mp3") // EJsS HtmlView.HtmlView Page: setting property 'AudioUrl' for element 'correctSound'
      ;

    _view._addElement(EJSS_INTERFACE.audio,"wrongSound", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'wrongSound'
      .setProperty("AudioUrl","./cross_cultural/assets/audio/wrong.mp3") // EJsS HtmlView.HtmlView Page: setting property 'AudioUrl' for element 'wrongSound'
      ;

    _view._addElement(EJSS_INTERFACE.audio,"clapSound", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'clapSound'
      .setProperty("AudioUrl","./cross_cultural/assets/audio/claps.mp3") // EJsS HtmlView.HtmlView Page: setting property 'AudioUrl' for element 'clapSound'
      ;

    _view._addElement(EJSS_INTERFACE.audio,"yeahSound", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'yeahSound'
      .setProperty("AudioUrl","./cross_cultural/assets/audio/yeah.mp3") // EJsS HtmlView.HtmlView Page: setting property 'AudioUrl' for element 'yeahSound'
      ;

    _view._addElement(EJSS_INTERFACE.audio,"fanfareSound", _view.gameScreen) // EJsS HtmlView.HtmlView Page: declaration of element 'fanfareSound'
      .setProperty("AudioUrl","./cross_cultural/assets/audio/fanfare.mp3") // EJsS HtmlView.HtmlView Page: setting property 'AudioUrl' for element 'fanfareSound'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameEnd", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'gameEnd'
      .setProperty("ClassName","position-absolute top-50 start-50 translate-middle w-50 h-50 d-none custom-container justify-content-evenly") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameEnd'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameEndTitle", _view.gameEnd) // EJsS HtmlView.HtmlView Page: declaration of element 'gameEndTitle'
      .setProperty("Html","WELL DONE!") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'gameEndTitle'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameEndBody", _view.gameEnd) // EJsS HtmlView.HtmlView Page: declaration of element 'gameEndBody'
      .setProperty("ClassName","d-flex align-items-center") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameEndBody'
      .setProperty("Html","With more awareness of the different religions, you can now play a part in your community in working together with people who are different from you.") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'gameEndBody'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"gameEndBtn", _view.gameEnd) // EJsS HtmlView.HtmlView Page: declaration of element 'gameEndBtn'
      .setProperty("ClassName","d-flex justify-content-center custom-button") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'gameEndBtn'
      .setProperty("Html","EXIT") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'gameEndBtn'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"confettiLeft", _view.gameEnd) // EJsS HtmlView.HtmlView Page: declaration of element 'confettiLeft'
      .setProperty("ClassName","modal-tl") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'confettiLeft'
      .setProperty("Html","<svg width=\"46\" height=\"49\" viewBox=\"0 0 46 49\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <mask id=\"mask0_863_10001\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"46\" height=\"49\"> <path d=\"M27.3999 18.7772C27.3909 18.7701 27.3863 18.7606 27.3767 18.754L27.3728 18.7512C27.2443 18.6433 27.1001 18.5502 26.943 18.4678L8.16338 6.0869C8.03532 5.62673 7.57694 4.3299 6.42754 4.11486C5.91917 4.0187 5.3511 4.09446 4.80088 4.16766C4.04202 4.26817 3.25534 4.37224 2.67197 4.02227C1.93734 3.58046 1.10704 1.49211 0.756817 0.279194C0.707844 0.109821 0.553261 -0.00037384 0.385162 -0.00037384C0.349453 -0.00037384 0.313484 0.00447083 0.277775 0.0146751C0.0729446 0.0738525 -0.0459251 0.288376 0.0132523 0.493462C0.114521 0.8442 1.03817 3.94294 2.27379 4.68497C3.08903 5.17498 4.05273 5.0477 4.90266 4.93419C5.41487 4.86633 5.89901 4.80231 6.2847 4.875C6.99536 5.00841 7.3614 6.01344 7.44506 6.39988L8.82378 15.3068V15.3071C8.82378 15.3076 8.82378 15.3076 8.82429 15.3079L10.9106 28.7841C10.9124 28.794 10.9185 28.8017 10.9208 28.8114C10.9683 29.0639 11.0547 29.3006 11.1881 29.5154C12.4447 31.5443 17.0772 30.8745 21.7332 27.991C21.8141 27.9408 21.8901 27.889 21.9699 27.8385C22.0903 28.5086 22.2559 29.1741 22.4898 29.7292C22.7719 30.3982 23.2045 31.0393 23.6614 31.7175C24.5657 33.058 25.5901 34.5773 26.0528 37.0355C26.5147 39.4955 25.811 41.6787 25.2967 43.2725C25.0228 44.1219 24.8064 44.7933 24.8154 45.3236C24.8406 46.8342 25.6079 47.9402 25.6408 47.9866C25.7329 48.117 25.8954 48.1769 26.0505 48.1394L28.1217 47.6239C28.2457 47.5931 28.3465 47.5028 28.3911 47.3834C28.4355 47.2637 28.4182 47.1301 28.3447 47.0255C28.3381 47.0163 27.682 46.0707 27.6606 44.7951C27.6537 44.3931 27.8626 43.7451 28.1049 42.995C28.6444 41.3221 29.3834 39.031 28.8844 36.3776C28.3926 33.762 27.2739 32.1027 26.3749 30.7696C25.9204 30.096 25.5281 29.5139 25.275 28.9137C24.9138 28.0566 24.7241 26.8712 24.6236 25.8624C27.4935 23.3462 28.7401 20.7574 27.796 19.2336C27.6889 19.0604 27.5534 18.9109 27.3999 18.7772ZM19.9318 19.3417C19.6602 18.8522 19.5189 18.3367 19.5189 17.7712C19.5189 16.7942 19.9313 15.8915 20.6537 15.2489L24.9258 18.065C23.5295 18.077 21.7873 18.5183 19.9318 19.3417ZM11.6088 9.28537L16.0579 12.2191C15.5643 12.945 14.7478 13.385 13.853 13.385C12.3809 13.385 11.1835 12.1877 11.1835 10.7164C11.1835 10.2062 11.3371 9.71161 11.6088 9.28537ZM10.9591 8.85683C10.6043 9.40883 10.4101 10.0544 10.4101 10.7161C10.4101 12.6139 11.9549 14.1582 13.8535 14.1582C15.0118 14.1582 16.0671 13.5861 16.7033 12.644L19.9872 14.8092C19.1931 15.5872 18.7452 16.6396 18.7452 17.7709C18.7452 18.4433 18.9074 19.0787 19.2227 19.6682C18.572 19.9868 17.9118 20.347 17.2507 20.7567C14.3649 22.5433 12.246 24.7002 11.3499 26.5649L10.5961 21.6966C11.2264 21.504 11.758 21.0724 12.1148 20.4449C12.5166 19.7379 12.6663 18.8428 12.536 17.9245C12.4062 17.0098 11.9975 16.1909 11.3851 15.6191C10.8481 15.1178 10.202 14.8505 9.53495 14.8446L8.34066 7.13095L10.9591 8.85683ZM9.65637 15.6259C10.0847 15.6619 10.5015 15.8522 10.8573 16.1848C11.3409 16.6361 11.6651 17.2929 11.77 18.0334C11.8763 18.7828 11.7603 19.504 11.4422 20.0628C11.267 20.371 10.9626 20.738 10.4759 20.9212L9.65637 15.6259ZM25.7332 31.2012C26.6369 32.5417 27.6613 34.0612 28.124 36.5194C28.5865 38.9795 27.8822 41.1627 27.3685 42.757C27.0943 43.6059 26.878 44.2772 26.8869 44.8076C26.9025 45.745 27.2037 46.5266 27.4381 46.9962L26.1395 47.3191C25.9449 46.9668 25.6043 46.2228 25.5893 45.3103C25.5822 44.9081 25.7913 44.2599 26.0334 43.51C26.5731 41.8374 27.3116 39.5457 26.8129 36.8926C26.3211 34.277 25.2023 32.618 24.3032 31.2852C23.8486 30.611 23.4563 30.0289 23.2033 29.4287C22.5834 27.9586 22.4658 25.519 22.4434 24.6709L23.7458 24.3467C23.7787 25.3604 23.9236 27.6987 24.5616 29.2136C24.8437 29.8827 25.2755 30.5232 25.7332 31.2012ZM24.5465 24.888C24.5118 24.2814 24.5098 23.8656 24.5098 23.8541C24.5098 23.735 24.4549 23.6225 24.3608 23.5493C24.2925 23.4955 24.208 23.4674 24.1228 23.4674C24.0917 23.4674 24.0603 23.4712 24.0297 23.4786L21.9579 23.9942C21.7853 24.037 21.6644 24.1921 21.6644 24.3696C21.6644 24.452 21.6689 25.642 21.8419 26.9995C21.6712 27.1118 21.5014 27.2243 21.3253 27.3332C16.7522 30.1651 12.7311 30.5368 11.8457 29.108C10.9604 27.6791 13.0847 24.2467 17.658 21.4145C21.5644 18.9956 25.06 18.3767 26.5507 19.1364L26.9025 19.368C26.9945 19.4504 27.0757 19.5394 27.1379 19.6397C27.8072 20.7207 26.7479 22.8223 24.5465 24.888ZM29.5375 24.0916C29.492 23.9508 29.3704 23.848 29.224 23.8266C29.2056 23.824 29.187 23.8227 29.1686 23.8227C29.0418 23.8227 28.9212 23.885 28.8487 23.9919L27.658 25.7433C27.5828 25.8545 27.5697 25.9963 27.6246 26.119C27.668 26.2164 28.7161 28.5122 30.9009 29.2621C31.8033 29.5723 32.9025 29.6264 34.0664 29.6835C35.6212 29.7603 37.2284 29.8394 38.3709 30.5508C39.8463 31.4696 39.792 33.4347 39.7517 34.8691C39.7405 35.2665 39.7308 35.6098 39.7555 35.8899C39.8775 37.2883 40.823 38.0553 40.8628 38.0869C40.9317 38.1418 41.0159 38.1714 41.1039 38.1714H43.9919C44.1621 38.1714 44.3123 38.0591 44.3618 37.8959C44.411 37.7326 44.347 37.5558 44.2052 37.4615C44.1957 37.4551 43.2333 36.8041 42.8724 35.5805C42.7775 35.2583 42.7527 34.755 42.7244 34.1729C42.642 32.4869 42.5183 29.9388 40.3621 28.2732C38.5462 26.8692 36.1823 26.8503 34.2833 26.8347C33.1946 26.8263 32.2541 26.8184 31.6781 26.5641C30.1298 25.8807 29.5433 24.1092 29.5375 24.0916ZM34.2771 27.6087C36.1533 27.6237 38.2796 27.6411 39.8894 28.8854C41.763 30.3329 41.8717 32.5738 41.9515 34.2104C41.9824 34.8425 42.0087 35.3882 42.1303 35.7993C42.3321 36.4842 42.6818 37.0169 43.0081 37.3977H41.2559C41.0575 37.1975 40.5993 36.6513 40.5266 35.8228C40.5057 35.5874 40.5149 35.2647 40.5254 34.8915C40.568 33.3608 40.6325 31.0479 38.7798 29.8947C37.4672 29.0772 35.7574 28.9927 34.1047 28.9116C32.9974 28.857 31.9515 28.8058 31.1526 28.5316C29.6234 28.0063 28.7095 26.5177 28.4263 25.9909L29.0936 25.0089C29.4492 25.6996 30.155 26.7381 31.3654 27.273C32.0883 27.5913 33.1025 27.599 34.2771 27.6087ZM40.0491 25.3129C40.1739 25.2553 40.2588 25.1354 40.2716 24.9984L40.4647 22.9797C40.4787 22.8351 40.4098 22.6945 40.2866 22.6165C40.2236 22.5762 40.1517 22.5565 40.0797 22.5565C40.0114 22.5565 39.9428 22.5746 39.882 22.6111C38.9714 23.1521 38.0018 23.2294 36.9188 22.8486C36.8116 22.8106 36.6922 22.8226 36.5923 22.881C36.4938 22.9394 36.4264 23.0389 36.4081 23.1521L36.0704 25.2606C36.0382 25.4611 36.1663 25.6522 36.364 25.6984C37.6172 25.992 38.8576 25.8631 40.0491 25.3129ZM37.1022 23.712C37.9883 23.9403 38.8344 23.8998 39.629 23.5921L39.5234 24.6987C38.6676 25.0538 37.7855 25.1589 36.8938 25.0147L37.1022 23.712ZM34.1384 40.8477C34.0945 40.8477 34.0501 40.8553 34.008 40.8704L32.5393 41.3956C32.3852 41.4509 32.2829 41.5968 32.2829 41.7598C32.2847 43.6732 32.7487 45.0797 33.7019 46.059C33.7807 46.1406 33.892 46.1796 34.0047 46.1756L36.0112 46.0414C36.1556 46.0317 36.2823 45.9419 36.3405 45.8093C36.3984 45.6766 36.3772 45.5231 36.2856 45.4108C35.2008 44.0813 34.6246 42.7062 34.5243 41.2084C34.5164 41.0875 34.4516 40.9773 34.3503 40.9107C34.2861 40.8694 34.2126 40.8477 34.1384 40.8477ZM35.2436 45.3177L34.1376 45.3914C33.4532 44.6129 33.0992 43.51 33.0604 42.031L33.8037 41.7649C33.9723 43.0044 34.4547 44.1949 35.2436 45.3177ZM20.7114 30.5355C20.6468 30.3952 20.5076 30.3102 20.3596 30.3102C20.3226 30.3102 20.2851 30.3156 20.2474 30.3268L18.0113 31.0043C17.8963 31.0393 17.8042 31.1255 17.7613 31.238C17.7193 31.3502 17.7312 31.4757 17.7942 31.5783C17.8098 31.603 19.3357 34.1041 19.478 36.989C19.5627 38.708 19.0791 40.515 18.6518 42.1091C18.3445 43.2587 18.0789 44.251 18.0812 45.018C18.0884 46.8232 18.898 48.4496 18.9329 48.518C18.999 48.6481 19.1322 48.7305 19.2783 48.7305H21.4151C21.5493 48.7305 21.674 48.6603 21.7444 48.5463C21.8151 48.4323 21.821 48.2894 21.761 48.1695C21.7529 48.1542 20.9981 46.6327 20.9922 45.0144C20.9897 44.3512 21.243 43.4044 21.5366 42.3083C21.9781 40.6592 22.4783 38.7904 22.3873 36.9508C22.2368 33.886 20.7736 30.6709 20.7114 30.5355ZM20.7892 42.1088C20.4815 43.2582 20.2157 44.251 20.2185 45.0175C20.2231 46.2057 20.5757 47.3168 20.8254 47.9568H19.5268C19.3209 47.4816 18.8597 46.2779 18.8554 45.0149C18.8531 44.3515 19.1061 43.4051 19.3997 42.309C19.8413 40.6599 20.3415 38.7909 20.2509 36.951C20.1328 34.563 19.163 32.4787 18.6975 31.6045L20.1415 31.1671C20.5055 32.0377 21.4968 34.602 21.6144 36.989C21.6996 38.7078 21.2159 40.5145 20.7892 42.1088ZM14.1501 42.6889L12.6901 42.2511C12.6536 42.2402 12.6166 42.2348 12.5791 42.2348C12.499 42.2348 12.4197 42.2596 12.3531 42.3075C12.2557 42.3777 12.1965 42.4889 12.1924 42.6088C12.158 43.6725 11.6764 44.5946 10.7188 45.4272C10.6216 45.5113 10.5729 45.6391 10.589 45.7667C10.6048 45.8942 10.6833 46.0062 10.7986 46.0641L12.5345 46.94C12.6901 47.0194 12.8819 46.9834 12.9987 46.851C13.8902 45.8417 14.3698 44.5708 14.4256 43.0738C14.4325 42.8978 14.3193 42.7396 14.1501 42.6889ZM12.6079 46.1108L11.6373 45.6213C12.3556 44.8749 12.786 44.0398 12.9214 43.1284L13.6349 43.3421C13.5474 44.4173 13.2025 45.3458 12.6079 46.1108ZM11.2052 35.1055C11.243 35.204 11.3192 35.2831 11.4164 35.3236L13.0201 35.997C13.2107 36.0761 13.4313 35.993 13.5198 35.8055C14.0476 34.6869 14.2272 33.3817 14.053 31.9259C14.0341 31.7701 13.9226 31.6405 13.7711 31.5987L12.2748 31.1893C12.2411 31.1803 12.2067 31.1757 12.1728 31.1757C12.0814 31.1757 11.9914 31.2081 11.9202 31.2693C11.8225 31.3535 11.7735 31.4806 11.7886 31.6084C11.9465 32.9253 11.6868 33.8072 11.2167 34.802C11.1716 34.8974 11.1672 35.0076 11.2052 35.1055ZM12.6026 32.0815L13.3114 32.2756C13.4058 33.335 13.2898 34.2941 12.965 35.1356L12.0819 34.7647C12.4324 33.9464 12.6459 33.1276 12.6026 32.0815ZM33.4025 34.288C33.204 34.1954 33.0017 34.149 32.8073 34.149C32.6086 34.149 32.4189 34.1974 32.2515 34.2941C31.9207 34.4852 31.709 34.8471 31.6707 35.2871C31.6368 35.682 31.7416 36.1136 31.9651 36.5013C32.1888 36.8888 32.5102 37.1952 32.8696 37.3633C33.2706 37.5512 33.6892 37.5487 34.0208 37.3576C34.3514 37.1666 34.5631 36.8044 34.6013 36.3644C34.6355 35.969 34.5307 35.5374 34.307 35.1499C34.0833 34.7624 33.7619 34.4561 33.4025 34.288ZM33.6338 36.6873C33.5805 36.7179 33.5223 36.7294 33.4652 36.7294C33.3619 36.7294 33.2616 36.6919 33.1981 36.662C32.9839 36.562 32.7788 36.3623 32.6357 36.1141C32.4926 35.8659 32.4217 35.5889 32.4421 35.353C32.451 35.2448 32.4893 35.0497 32.639 34.9632C32.7869 34.8772 32.9757 34.9415 33.0747 34.9879C33.2892 35.0882 33.4938 35.2877 33.6369 35.5358C33.78 35.7843 33.8509 36.0611 33.8302 36.297C33.821 36.4064 33.783 36.6013 33.6338 36.6873ZM10.5951 39.5128C10.3446 39.5128 10.0854 39.5957 9.84641 39.7564C9.51709 39.9781 9.24722 40.3301 9.08626 40.7477C8.72864 41.6734 9.00259 42.6121 9.70994 42.8845C10.4183 43.1579 11.2509 42.6468 11.6083 41.7208C11.9654 40.7956 11.6912 39.8574 10.9843 39.5848C10.8604 39.5368 10.729 39.5128 10.5951 39.5128ZM10.8871 41.4425C10.7042 41.9157 10.3568 42.1828 10.1012 42.1828C10.0612 42.1828 10.0237 42.1761 9.98925 42.1629C9.73417 42.0644 9.59694 41.5736 9.80814 41.0262C9.80814 41.0262 9.80814 41.0262 9.80814 41.026C9.91145 40.7589 10.0829 40.5301 10.279 40.3977C10.3696 40.3375 10.5451 40.2447 10.706 40.3061C10.9606 40.4049 11.0981 40.8956 10.8871 41.4425ZM17.1262 34.7117C17.0208 34.2829 16.7558 33.9577 16.3992 33.8199C16.275 33.772 16.1434 33.748 16.0094 33.748C15.7592 33.748 15.5 33.8306 15.2608 33.9916C14.9317 34.2132 14.6616 34.5653 14.5006 34.9828C14.1433 35.9083 14.417 36.8467 15.1243 37.1194C15.4799 37.2561 15.8954 37.1944 16.2622 36.9472C16.5913 36.7255 16.8614 36.3735 17.0224 35.956C17.1841 35.5389 17.2208 35.0969 17.1262 34.7117ZM16.3013 35.6782C16.1979 35.945 16.0265 36.1741 15.8304 36.3064C15.7607 36.3531 15.6411 36.4189 15.5166 36.4189C15.4786 36.4189 15.4409 36.4128 15.4034 36.3983C15.1483 36.2998 15.011 35.809 15.2223 35.2616C15.2223 35.2616 15.2223 35.2616 15.2223 35.2614C15.3256 34.9946 15.497 34.7655 15.6931 34.6334C15.7837 34.5729 15.9592 34.4801 16.1201 34.5415C16.2811 34.6035 16.3487 34.7908 16.3747 34.8966C16.4313 35.1257 16.4046 35.4111 16.3013 35.6782ZM17.8914 23.4789C17.7672 23.4789 17.6437 23.5008 17.5249 23.5465C17.1614 23.6863 16.8997 24.0317 16.8076 24.4939C16.7272 24.8992 16.7775 25.369 16.9497 25.8167C17.3351 26.8174 18.1901 27.3885 18.8985 27.1166C19.6061 26.8444 19.8584 25.8471 19.4732 24.8461C19.1531 24.0138 18.5069 23.4789 17.8914 23.4789ZM18.6207 26.3947C18.5916 26.406 18.5603 26.4113 18.5271 26.4113C18.2646 26.4113 17.8794 26.0787 17.6721 25.5387C17.5532 25.2305 17.5149 24.9045 17.5667 24.6449C17.6063 24.4482 17.6917 24.3107 17.8024 24.2684C18.0618 24.1681 18.5174 24.5158 18.7511 25.1237C18.9855 25.7325 18.8753 26.2968 18.6207 26.3947ZM24.1264 20.2712C23.7961 20.0549 23.4303 19.9501 23.0887 19.9501C22.6357 19.9501 22.2248 20.135 21.9919 20.4901C21.7858 20.8049 21.749 21.213 21.8914 21.6089C22.0217 21.9716 22.2896 22.3002 22.6454 22.5333C23.001 22.7662 23.4048 22.8794 23.7948 22.8542C24.2147 22.8261 24.5736 22.6292 24.7799 22.3144C25.1881 21.6905 24.8947 20.7743 24.1264 20.2712ZM24.1323 21.8905C24.0336 22.0418 23.8458 22.0757 23.743 22.0823C23.7244 22.0836 23.7058 22.0844 23.6874 22.0844C23.4856 22.0844 23.2637 22.0134 23.0691 21.8859C22.8558 21.7466 22.6918 21.5505 22.6191 21.3472C22.5842 21.25 22.5406 21.0648 22.6393 20.914C22.8084 20.6567 23.305 20.6582 23.7019 20.9186C24.0996 21.1788 24.3009 21.6329 24.1323 21.8905ZM22.1115 42.1596C22.2169 42.5884 22.4816 42.9136 22.8385 43.0513C23.1951 43.1891 23.6099 43.1261 23.9764 42.8797C24.3055 42.658 24.5756 42.306 24.7366 41.8884C24.8978 41.4706 24.9348 41.0285 24.8399 40.6434C24.7345 40.2146 24.4695 39.8893 24.1129 39.7516C23.9887 39.7036 23.857 39.6797 23.7234 39.6797C23.4729 39.6797 23.2137 39.7623 22.9747 39.9233C22.6454 40.1449 22.3753 40.4967 22.2143 40.9145C22.0531 41.3321 22.0164 41.7741 22.1115 42.1596ZM22.9359 41.1933C23.0392 40.926 23.2107 40.6972 23.4068 40.5648C23.4974 40.5046 23.6729 40.4112 23.8338 40.4732C23.9948 40.5352 24.0626 40.7222 24.0884 40.8283C24.145 41.0576 24.118 41.3425 24.0149 41.6099C23.9116 41.8767 23.7402 42.1057 23.544 42.2379C23.4744 42.2843 23.3553 42.3501 23.2303 42.3501C23.1925 42.3501 23.1545 42.344 23.117 42.3297C22.9561 42.2677 22.8885 42.0805 22.8625 41.9746C22.8061 41.7453 22.8331 41.4601 22.9359 41.1933ZM16.3992 44.7775C16.275 44.7295 16.1439 44.7055 16.0094 44.7055C15.7595 44.7055 15.5 44.7882 15.2608 44.9494C14.9317 45.1711 14.6616 45.5231 14.5006 45.9406C14.3394 46.358 14.3027 46.8 14.3973 47.1852C14.5027 47.6142 14.7677 47.9395 15.1243 48.0772C15.4809 48.2149 15.8962 48.1517 16.2622 47.9055C16.5913 47.6839 16.8614 47.3316 17.0224 46.9143C17.1838 46.4965 17.2206 46.0544 17.1257 45.6692C17.0203 45.2404 16.7558 44.915 16.3992 44.7775ZM16.3013 46.6357C16.1979 46.9026 16.0265 47.1319 15.8304 47.2643C15.7607 47.3107 15.6416 47.3762 15.5166 47.3762C15.4786 47.3762 15.4409 47.3701 15.4034 47.3558C15.2424 47.2941 15.1746 47.1069 15.1488 47.0008C15.0922 46.7714 15.1192 46.4865 15.2223 46.2192C15.2223 46.2192 15.2223 46.2192 15.2223 46.2189C15.3256 45.9519 15.497 45.7231 15.6931 45.5907C15.7837 45.5297 15.9597 45.4369 16.1201 45.4986C16.2811 45.5606 16.3487 45.7478 16.3747 45.8537C16.4313 46.083 16.4046 46.3684 16.3013 46.6357ZM42.8395 41.3798C42.9624 41.0178 42.8828 40.6064 42.6211 40.25C42.3864 39.9307 42.0229 39.6753 41.599 39.5312C41.3498 39.4465 41.1018 39.4065 40.8667 39.4065C40.2159 39.4065 39.668 39.7151 39.489 40.2419C39.366 40.6038 39.4456 41.0155 39.7071 41.3716C39.942 41.691 40.3052 41.9463 40.7294 42.0907C41.6679 42.4098 42.5956 42.0976 42.8395 41.3798ZM40.3307 40.9132C40.2662 40.8252 40.1659 40.6538 40.2218 40.4906C40.3091 40.2319 40.794 40.074 41.3503 40.2635C41.6214 40.3556 41.8574 40.5176 41.9974 40.7079C42.0622 40.7961 42.1622 40.9676 42.1066 41.1308C42.0459 41.3101 41.7934 41.4407 41.4587 41.4407C41.3113 41.4407 41.148 41.4157 40.9781 41.3578C40.707 41.2658 40.4713 41.1035 40.3307 40.9132ZM43.318 28.0665C44.2564 28.3856 45.1839 28.0734 45.428 27.3554C45.5507 26.9934 45.4709 26.5817 45.2094 26.2261C44.9748 25.9065 44.6113 25.6514 44.1873 25.507C43.9381 25.4224 43.6902 25.3826 43.455 25.3826C42.8043 25.3826 42.2563 25.6907 42.0768 26.218C41.9541 26.5799 42.0339 26.9914 42.2954 27.3477C42.5311 27.6671 42.8941 27.9224 43.318 28.0665ZM42.8099 26.4669C42.8981 26.2078 43.383 26.0509 43.9389 26.2399C44.21 26.332 44.4462 26.494 44.5863 26.6843C44.6508 26.772 44.751 26.9439 44.6952 27.1069C44.6345 27.2865 44.3819 27.4171 44.0473 27.4171C43.8998 27.4171 43.7366 27.3921 43.5667 27.3339C43.2955 27.2421 43.0596 27.0799 42.9196 26.8896C42.8548 26.8016 42.7548 26.6294 42.8099 26.4669ZM32.7017 23.5674C33.1249 23.7113 33.568 23.7299 33.9504 23.6192C34.3751 23.4967 34.6888 23.2182 34.8118 22.8562C34.935 22.4943 34.8551 22.0828 34.5937 21.727C34.3588 21.4074 33.9955 21.1523 33.5716 21.0079C33.33 20.926 33.0826 20.885 32.8433 20.885C32.6627 20.885 32.487 20.9089 32.3227 20.9564C31.8977 21.0791 31.584 21.3571 31.461 21.7191C31.3381 22.0813 31.4182 22.4927 31.6791 22.8488C31.9146 23.1679 32.2773 23.4233 32.7017 23.5674ZM32.1939 21.9675C32.2492 21.8045 32.4329 21.7295 32.5377 21.6994C32.7645 21.6329 33.0499 21.6484 33.3224 21.7408C33.5935 21.8328 33.8295 21.9948 33.9695 22.1851C34.0338 22.2731 34.134 22.4448 34.0784 22.608C34.0231 22.771 33.8392 22.8463 33.7343 22.8764C33.6412 22.9034 33.5379 22.9167 33.43 22.9167C33.2752 22.9167 33.1104 22.8891 32.9502 22.8346C32.679 22.7425 32.4426 22.5805 32.3028 22.3902C32.2383 22.3025 32.1385 22.1308 32.1939 21.9675Z\" fill=\"white\"/> </mask> <g mask=\"url(#mask0_863_10001)\"> <path d=\"M45.5469 48.7305V-0.00037384H-0.0497742V48.7305H45.5469Z\" fill=\"url(#paint0_linear_863_10001)\"/> </g> <defs> <linearGradient id=\"paint0_linear_863_10001\" x1=\"22.7375\" y1=\"48.7304\" x2=\"22.7375\" y2=\"-0.000461934\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#F9C621\"/> <stop offset=\"0.00390625\" stop-color=\"#F9C522\"/> <stop offset=\"0.0078125\" stop-color=\"#F9C423\"/> <stop offset=\"0.0117188\" stop-color=\"#F9C423\"/> <stop offset=\"0.015625\" stop-color=\"#F9C324\"/> <stop offset=\"0.0195312\" stop-color=\"#F9C225\"/> <stop offset=\"0.0234375\" stop-color=\"#F9C126\"/> <stop offset=\"0.0273438\" stop-color=\"#F9C127\"/> <stop offset=\"0.03125\" stop-color=\"#F9C027\"/> <stop offset=\"0.0351562\" stop-color=\"#F9BF28\"/> <stop offset=\"0.0390625\" stop-color=\"#F9BE29\"/> <stop offset=\"0.0429688\" stop-color=\"#F9BD2A\"/> <stop offset=\"0.046875\" stop-color=\"#F9BD2B\"/> <stop offset=\"0.0507813\" stop-color=\"#F9BC2C\"/> <stop offset=\"0.0546875\" stop-color=\"#F9BB2C\"/> <stop offset=\"0.0585938\" stop-color=\"#F9BA2D\"/> <stop offset=\"0.0625\" stop-color=\"#F9BA2E\"/> <stop offset=\"0.0664062\" stop-color=\"#F9B92F\"/> <stop offset=\"0.0703125\" stop-color=\"#F9B830\"/> <stop offset=\"0.0742188\" stop-color=\"#F9B731\"/> <stop offset=\"0.078125\" stop-color=\"#F9B731\"/> <stop offset=\"0.0820312\" stop-color=\"#F9B632\"/> <stop offset=\"0.0859375\" stop-color=\"#F9B533\"/> <stop offset=\"0.0898438\" stop-color=\"#F9B434\"/> <stop offset=\"0.09375\" stop-color=\"#F9B435\"/> <stop offset=\"0.0976563\" stop-color=\"#F9B336\"/> <stop offset=\"0.101563\" stop-color=\"#F9B236\"/> <stop offset=\"0.105469\" stop-color=\"#FAB137\"/> <stop offset=\"0.109375\" stop-color=\"#FAB038\"/> <stop offset=\"0.113281\" stop-color=\"#FAB039\"/> <stop offset=\"0.117188\" stop-color=\"#FAAF3A\"/> <stop offset=\"0.121094\" stop-color=\"#FAAE3A\"/> <stop offset=\"0.125\" stop-color=\"#FAAD3B\"/> <stop offset=\"0.128906\" stop-color=\"#FAAD3C\"/> <stop offset=\"0.132812\" stop-color=\"#FAAC3D\"/> <stop offset=\"0.136719\" stop-color=\"#FAAB3E\"/> <stop offset=\"0.140625\" stop-color=\"#FAAA3F\"/> <stop offset=\"0.144531\" stop-color=\"#FAAA3F\"/> <stop offset=\"0.148438\" stop-color=\"#FAA940\"/> <stop offset=\"0.152344\" stop-color=\"#FAA841\"/> <stop offset=\"0.15625\" stop-color=\"#FAA742\"/> <stop offset=\"0.160156\" stop-color=\"#FAA743\"/> <stop offset=\"0.164062\" stop-color=\"#FAA644\"/> <stop offset=\"0.167969\" stop-color=\"#FAA544\"/> <stop offset=\"0.171875\" stop-color=\"#FAA445\"/> <stop offset=\"0.175781\" stop-color=\"#FAA346\"/> <stop offset=\"0.179688\" stop-color=\"#FAA347\"/> <stop offset=\"0.183594\" stop-color=\"#FAA248\"/> <stop offset=\"0.1875\" stop-color=\"#FAA148\"/> <stop offset=\"0.191406\" stop-color=\"#FAA049\"/> <stop offset=\"0.195313\" stop-color=\"#FAA04A\"/> <stop offset=\"0.199219\" stop-color=\"#FA9F4B\"/> <stop offset=\"0.203125\" stop-color=\"#FA9E4C\"/> <stop offset=\"0.207031\" stop-color=\"#FA9D4D\"/> <stop offset=\"0.210938\" stop-color=\"#FA9D4D\"/> <stop offset=\"0.214844\" stop-color=\"#FA9C4E\"/> <stop offset=\"0.21875\" stop-color=\"#FA9B4F\"/> <stop offset=\"0.222656\" stop-color=\"#FA9A50\"/> <stop offset=\"0.226563\" stop-color=\"#FA9A51\"/> <stop offset=\"0.230469\" stop-color=\"#FA9952\"/> <stop offset=\"0.234375\" stop-color=\"#FA9852\"/> <stop offset=\"0.238281\" stop-color=\"#FA9753\"/> <stop offset=\"0.242188\" stop-color=\"#FA9654\"/> <stop offset=\"0.246094\" stop-color=\"#FA9655\"/> <stop offset=\"0.25\" stop-color=\"#FA9556\"/> <stop offset=\"0.253906\" stop-color=\"#FA9457\"/> <stop offset=\"0.257812\" stop-color=\"#FA9357\"/> <stop offset=\"0.261719\" stop-color=\"#FA9358\"/> <stop offset=\"0.265625\" stop-color=\"#FB9259\"/> <stop offset=\"0.269531\" stop-color=\"#FB915A\"/> <stop offset=\"0.273438\" stop-color=\"#FB905B\"/> <stop offset=\"0.277344\" stop-color=\"#FB905B\"/> <stop offset=\"0.28125\" stop-color=\"#FB8F5C\"/> <stop offset=\"0.285156\" stop-color=\"#FB8E5D\"/> <stop offset=\"0.289062\" stop-color=\"#FB8D5E\"/> <stop offset=\"0.292969\" stop-color=\"#FB8C5F\"/> <stop offset=\"0.296875\" stop-color=\"#FB8C60\"/> <stop offset=\"0.300781\" stop-color=\"#FB8B60\"/> <stop offset=\"0.304688\" stop-color=\"#FB8A61\"/> <stop offset=\"0.308594\" stop-color=\"#FB8962\"/> <stop offset=\"0.3125\" stop-color=\"#FB8963\"/> <stop offset=\"0.316406\" stop-color=\"#FB8864\"/> <stop offset=\"0.320313\" stop-color=\"#FB8765\"/> <stop offset=\"0.324219\" stop-color=\"#FB8665\"/> <stop offset=\"0.328125\" stop-color=\"#FB8666\"/> <stop offset=\"0.332031\" stop-color=\"#FB8567\"/> <stop offset=\"0.335938\" stop-color=\"#FB8468\"/> <stop offset=\"0.339844\" stop-color=\"#FB8369\"/> <stop offset=\"0.34375\" stop-color=\"#FB8369\"/> <stop offset=\"0.347656\" stop-color=\"#FB826A\"/> <stop offset=\"0.351563\" stop-color=\"#FB816B\"/> <stop offset=\"0.355469\" stop-color=\"#FB806C\"/> <stop offset=\"0.359375\" stop-color=\"#FB806D\"/> <stop offset=\"0.363281\" stop-color=\"#FB7F6E\"/> <stop offset=\"0.367188\" stop-color=\"#FB7E6E\"/> <stop offset=\"0.371094\" stop-color=\"#FB7D6F\"/> <stop offset=\"0.375\" stop-color=\"#FB7C70\"/> <stop offset=\"0.378906\" stop-color=\"#FB7C71\"/> <stop offset=\"0.382813\" stop-color=\"#FB7B72\"/> <stop offset=\"0.386719\" stop-color=\"#FB7A73\"/> <stop offset=\"0.390625\" stop-color=\"#FB7973\"/> <stop offset=\"0.394531\" stop-color=\"#FB7974\"/> <stop offset=\"0.398438\" stop-color=\"#FB7875\"/> <stop offset=\"0.402344\" stop-color=\"#FB7776\"/> <stop offset=\"0.40625\" stop-color=\"#FB7677\"/> <stop offset=\"0.410156\" stop-color=\"#FB7677\"/> <stop offset=\"0.414062\" stop-color=\"#FB7578\"/> <stop offset=\"0.417969\" stop-color=\"#FB7479\"/> <stop offset=\"0.421875\" stop-color=\"#FB737A\"/> <stop offset=\"0.425781\" stop-color=\"#FB727B\"/> <stop offset=\"0.429688\" stop-color=\"#FC727C\"/> <stop offset=\"0.433594\" stop-color=\"#FC717C\"/> <stop offset=\"0.4375\" stop-color=\"#FC707D\"/> <stop offset=\"0.441406\" stop-color=\"#FC6F7E\"/> <stop offset=\"0.445312\" stop-color=\"#FC6F7F\"/> <stop offset=\"0.449219\" stop-color=\"#FC6E80\"/> <stop offset=\"0.453125\" stop-color=\"#FC6D81\"/> <stop offset=\"0.457031\" stop-color=\"#FC6C81\"/> <stop offset=\"0.460938\" stop-color=\"#FC6C82\"/> <stop offset=\"0.464844\" stop-color=\"#FC6B83\"/> <stop offset=\"0.46875\" stop-color=\"#FC6A84\"/> <stop offset=\"0.472656\" stop-color=\"#FC6985\"/> <stop offset=\"0.476563\" stop-color=\"#FC6986\"/> <stop offset=\"0.480469\" stop-color=\"#FC6886\"/> <stop offset=\"0.484375\" stop-color=\"#FC6787\"/> <stop offset=\"0.488281\" stop-color=\"#FC6688\"/> <stop offset=\"0.492188\" stop-color=\"#FC6589\"/> <stop offset=\"0.496094\" stop-color=\"#FC658A\"/> <stop offset=\"0.5\" stop-color=\"#FC648A\"/> <stop offset=\"0.503906\" stop-color=\"#FC638B\"/> <stop offset=\"0.507812\" stop-color=\"#FC628C\"/> <stop offset=\"0.511719\" stop-color=\"#FC628D\"/> <stop offset=\"0.515625\" stop-color=\"#FC618E\"/> <stop offset=\"0.519531\" stop-color=\"#FC608F\"/> <stop offset=\"0.523438\" stop-color=\"#FC5F8F\"/> <stop offset=\"0.527344\" stop-color=\"#FC5F90\"/> <stop offset=\"0.53125\" stop-color=\"#FC5E91\"/> <stop offset=\"0.535156\" stop-color=\"#FC5D92\"/> <stop offset=\"0.539062\" stop-color=\"#FC5C93\"/> <stop offset=\"0.542969\" stop-color=\"#FC5C94\"/> <stop offset=\"0.546875\" stop-color=\"#FC5B94\"/> <stop offset=\"0.550781\" stop-color=\"#FC5A95\"/> <stop offset=\"0.554687\" stop-color=\"#FC5996\"/> <stop offset=\"0.558594\" stop-color=\"#FC5897\"/> <stop offset=\"0.5625\" stop-color=\"#FC5898\"/> <stop offset=\"0.566406\" stop-color=\"#FC5798\"/> <stop offset=\"0.570312\" stop-color=\"#FC5699\"/> <stop offset=\"0.574219\" stop-color=\"#FC559A\"/> <stop offset=\"0.578125\" stop-color=\"#FC559B\"/> <stop offset=\"0.582031\" stop-color=\"#FC549C\"/> <stop offset=\"0.585937\" stop-color=\"#FC539D\"/> <stop offset=\"0.589844\" stop-color=\"#FC529D\"/> <stop offset=\"0.59375\" stop-color=\"#FD529E\"/> <stop offset=\"0.597656\" stop-color=\"#FD519F\"/> <stop offset=\"0.601562\" stop-color=\"#FD50A0\"/> <stop offset=\"0.605469\" stop-color=\"#FD4FA1\"/> <stop offset=\"0.609375\" stop-color=\"#FD4FA2\"/> <stop offset=\"0.613281\" stop-color=\"#FD4EA2\"/> <stop offset=\"0.617187\" stop-color=\"#FD4DA3\"/> <stop offset=\"0.621094\" stop-color=\"#FD4CA4\"/> <stop offset=\"0.625\" stop-color=\"#FD4BA5\"/> <stop offset=\"0.628906\" stop-color=\"#FD4BA6\"/> <stop offset=\"0.632812\" stop-color=\"#FD4AA7\"/> <stop offset=\"0.636719\" stop-color=\"#FD49A7\"/> <stop offset=\"0.640625\" stop-color=\"#FD48A8\"/> <stop offset=\"0.644531\" stop-color=\"#FD48A9\"/> <stop offset=\"0.648437\" stop-color=\"#FD47AA\"/> <stop offset=\"0.652344\" stop-color=\"#FD46AB\"/> <stop offset=\"0.65625\" stop-color=\"#FD45AB\"/> <stop offset=\"0.660156\" stop-color=\"#FD45AC\"/> <stop offset=\"0.664062\" stop-color=\"#FD44AD\"/> <stop offset=\"0.667969\" stop-color=\"#FD43AE\"/> <stop offset=\"0.671875\" stop-color=\"#FD42AF\"/> <stop offset=\"0.675781\" stop-color=\"#FD42B0\"/> <stop offset=\"0.679688\" stop-color=\"#FD41B0\"/> <stop offset=\"0.683594\" stop-color=\"#FD40B1\"/> <stop offset=\"0.6875\" stop-color=\"#FD3FB2\"/> <stop offset=\"0.691406\" stop-color=\"#FD3EB3\"/> <stop offset=\"0.695313\" stop-color=\"#FD3EB4\"/> <stop offset=\"0.699219\" stop-color=\"#FD3DB5\"/> <stop offset=\"0.703125\" stop-color=\"#FD3CB5\"/> <stop offset=\"0.707031\" stop-color=\"#FD3BB6\"/> <stop offset=\"0.710938\" stop-color=\"#FD3BB7\"/> <stop offset=\"0.714844\" stop-color=\"#FD3AB8\"/> <stop offset=\"0.71875\" stop-color=\"#FD39B9\"/> <stop offset=\"0.722656\" stop-color=\"#FD38B9\"/> <stop offset=\"0.726563\" stop-color=\"#FD38BA\"/> <stop offset=\"0.730469\" stop-color=\"#FD37BB\"/> <stop offset=\"0.734375\" stop-color=\"#FD36BC\"/> <stop offset=\"0.738281\" stop-color=\"#FD35BD\"/> <stop offset=\"0.742188\" stop-color=\"#FD35BE\"/> <stop offset=\"0.746094\" stop-color=\"#FD34BE\"/> <stop offset=\"0.75\" stop-color=\"#FD33BF\"/> <stop offset=\"0.753906\" stop-color=\"#FD32C0\"/> <stop offset=\"0.757813\" stop-color=\"#FE31C1\"/> <stop offset=\"0.761719\" stop-color=\"#FE31C2\"/> <stop offset=\"0.765625\" stop-color=\"#FE30C3\"/> <stop offset=\"0.769531\" stop-color=\"#FE2FC3\"/> <stop offset=\"0.773438\" stop-color=\"#FE2EC4\"/> <stop offset=\"0.777344\" stop-color=\"#FE2EC5\"/> <stop offset=\"0.78125\" stop-color=\"#FE2DC6\"/> <stop offset=\"0.785156\" stop-color=\"#FE2CC7\"/> <stop offset=\"0.789063\" stop-color=\"#FE2BC7\"/> <stop offset=\"0.792969\" stop-color=\"#FE2BC8\"/> <stop offset=\"0.796875\" stop-color=\"#FE2AC9\"/> <stop offset=\"0.800781\" stop-color=\"#FE29CA\"/> <stop offset=\"0.804688\" stop-color=\"#FE28CB\"/> <stop offset=\"0.808594\" stop-color=\"#FE28CC\"/> <stop offset=\"0.8125\" stop-color=\"#FE27CC\"/> <stop offset=\"0.816406\" stop-color=\"#FE26CD\"/> <stop offset=\"0.820313\" stop-color=\"#FE25CE\"/> <stop offset=\"0.824219\" stop-color=\"#FE24CF\"/> <stop offset=\"0.828125\" stop-color=\"#FE24D0\"/> <stop offset=\"0.832031\" stop-color=\"#FE23D1\"/> <stop offset=\"0.835938\" stop-color=\"#FE22D1\"/> <stop offset=\"0.839844\" stop-color=\"#FE21D2\"/> <stop offset=\"0.84375\" stop-color=\"#FE21D3\"/> <stop offset=\"0.847656\" stop-color=\"#FE20D4\"/> <stop offset=\"0.851563\" stop-color=\"#FE1FD5\"/> <stop offset=\"0.855469\" stop-color=\"#FE1ED6\"/> <stop offset=\"0.859375\" stop-color=\"#FE1ED6\"/> <stop offset=\"0.863281\" stop-color=\"#FE1DD7\"/> <stop offset=\"0.867188\" stop-color=\"#FE1CD8\"/> <stop offset=\"0.871094\" stop-color=\"#FE1BD9\"/> <stop offset=\"0.875\" stop-color=\"#FE1BDA\"/> <stop offset=\"0.878906\" stop-color=\"#FE1ADA\"/> <stop offset=\"0.882812\" stop-color=\"#FE19DB\"/> <stop offset=\"0.886719\" stop-color=\"#FE18DC\"/> <stop offset=\"0.890625\" stop-color=\"#FE17DD\"/> <stop offset=\"0.894531\" stop-color=\"#FE17DE\"/> <stop offset=\"0.898438\" stop-color=\"#FE16DF\"/> <stop offset=\"0.902344\" stop-color=\"#FE15DF\"/> <stop offset=\"0.90625\" stop-color=\"#FE14E0\"/> <stop offset=\"0.910156\" stop-color=\"#FE14E1\"/> <stop offset=\"0.914062\" stop-color=\"#FE13E2\"/> <stop offset=\"0.917969\" stop-color=\"#FE12E3\"/> <stop offset=\"0.921875\" stop-color=\"#FF11E4\"/> <stop offset=\"0.925781\" stop-color=\"#FF11E4\"/> <stop offset=\"0.929687\" stop-color=\"#FF10E5\"/> <stop offset=\"0.933594\" stop-color=\"#FF0FE6\"/> <stop offset=\"0.9375\" stop-color=\"#FF0EE7\"/> <stop offset=\"0.941406\" stop-color=\"#FF0EE8\"/> <stop offset=\"0.945312\" stop-color=\"#FF0DE8\"/> <stop offset=\"0.949219\" stop-color=\"#FF0CE9\"/> <stop offset=\"0.953125\" stop-color=\"#FF0BEA\"/> <stop offset=\"0.957031\" stop-color=\"#FF0AEB\"/> <stop offset=\"0.960937\" stop-color=\"#FF0AEC\"/> <stop offset=\"0.964844\" stop-color=\"#FF09ED\"/> <stop offset=\"0.96875\" stop-color=\"#FF08ED\"/> <stop offset=\"0.972656\" stop-color=\"#FF07EE\"/> <stop offset=\"0.976562\" stop-color=\"#FF07EF\"/> <stop offset=\"0.980469\" stop-color=\"#FF06F0\"/> <stop offset=\"0.984375\" stop-color=\"#FF05F1\"/> <stop offset=\"0.988281\" stop-color=\"#FF04F2\"/> <stop offset=\"0.992187\" stop-color=\"#FF04F2\"/> <stop offset=\"0.996094\" stop-color=\"#FF03F3\"/> <stop offset=\"1\" stop-color=\"#FF02F4\"/> </linearGradient> </defs> </svg>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'confettiLeft'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"confettiRight", _view.gameEnd) // EJsS HtmlView.HtmlView Page: declaration of element 'confettiRight'
      .setProperty("ClassName","modal-br") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'confettiRight'
      .setProperty("Html","<svg width=\"60\" height=\"65\" viewBox=\"0 0 60 65\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"> <mask id=\"mask0_863_10007\" style=\"mask-type:luminance\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"60\" height=\"65\"> <path d=\"M23.8552 39.5111C23.8669 39.5205 23.873 39.533 23.8858 39.5417L23.8908 39.5454C24.0604 39.6878 24.2505 39.8106 24.4578 39.9193L49.2299 56.2508C49.3988 56.8578 50.0034 58.5685 51.5196 58.8521C52.1902 58.979 52.9395 58.8791 53.6653 58.7825C54.6663 58.6499 55.704 58.5126 56.4735 58.9743C57.4426 59.5571 58.5378 62.3118 58.9998 63.9117C59.0644 64.1352 59.2683 64.2805 59.4901 64.2805C59.5372 64.2805 59.5846 64.2741 59.6317 64.2607C59.9019 64.1826 60.0587 63.8996 59.9806 63.6291C59.8471 63.1665 58.6287 59.0789 56.9988 58.1001C55.9234 57.4537 54.6522 57.6216 53.5311 57.7714C52.8554 57.8609 52.2168 57.9453 51.708 57.8494C50.7706 57.6735 50.2878 56.3477 50.1774 55.838L48.3587 44.0889V44.0886C48.3587 44.0879 48.3587 44.0879 48.3581 44.0875L45.606 26.3111C45.6037 26.298 45.5956 26.2879 45.5926 26.2751C45.53 25.942 45.4159 25.6298 45.2399 25.3465C43.5824 22.6701 37.4717 23.5537 31.33 27.3572C31.2233 27.4235 31.1231 27.4918 31.0177 27.5585C30.8589 26.6745 30.6405 25.7967 30.332 25.0645C29.9599 24.1819 29.3892 23.3363 28.7866 22.4417C27.5937 20.6735 26.2425 18.6694 25.6321 15.4268C25.0227 12.1818 25.9511 9.3019 26.6294 7.19959C26.9908 6.07913 27.2761 5.19352 27.2643 4.49398C27.231 2.50137 26.2189 1.04241 26.1755 0.981166C26.054 0.809227 25.8397 0.730155 25.6351 0.779617L22.9029 1.45964C22.7394 1.50035 22.6065 1.61946 22.5476 1.77693C22.4891 1.93474 22.5119 2.11106 22.6088 2.24901C22.6176 2.26112 23.483 3.50844 23.5113 5.19116C23.5204 5.72145 23.2448 6.5761 22.9251 7.56568C22.2135 9.77229 21.2387 12.7945 21.8969 16.2946C22.5456 19.7448 24.0214 21.9336 25.2071 23.692C25.8067 24.5806 26.3242 25.3485 26.658 26.1402C27.1345 27.2708 27.3848 28.8344 27.5174 30.1651C23.7317 33.4841 22.0873 36.8991 23.3326 38.9092C23.4739 39.1376 23.6526 39.3348 23.8552 39.5111ZM33.7062 38.7665C34.0645 39.4122 34.2509 40.0922 34.2509 40.8382C34.2509 42.1269 33.7069 43.3177 32.754 44.1653L27.1186 40.4506C28.9605 40.4347 31.2586 39.8526 33.7062 38.7665ZM44.6851 52.0318L38.8163 48.1619C39.4673 47.2043 40.5444 46.6239 41.7248 46.6239C43.6666 46.6239 45.246 48.2033 45.246 50.1441C45.246 50.8171 45.0434 51.4695 44.6851 52.0318ZM45.5421 52.597C46.0101 51.8689 46.2662 51.0173 46.2662 50.1445C46.2662 47.6411 44.2285 45.604 41.7241 45.604C40.1961 45.604 38.8041 46.3588 37.965 47.6014L33.6332 44.7454C34.6806 43.7191 35.2715 42.3308 35.2715 40.8385C35.2715 39.9516 35.0575 39.1134 34.6416 38.3358C35.4999 37.9156 36.3707 37.4404 37.2429 36.9001C41.0494 34.5434 43.8446 31.6981 45.0266 29.2385L46.0209 35.6601C45.1895 35.9142 44.4882 36.4835 44.0175 37.3112C43.4876 38.2439 43.2901 39.4246 43.462 40.636C43.6333 41.8426 44.1723 42.9227 44.9802 43.677C45.6885 44.3382 46.5408 44.6908 47.4206 44.6986L48.996 54.8736L45.5421 52.597ZM47.2605 43.668C46.6955 43.6205 46.1457 43.3695 45.6763 42.9307C45.0384 42.3355 44.6107 41.4691 44.4724 40.4923C44.3321 39.5037 44.4852 38.5525 44.9048 37.8153C45.136 37.4088 45.5374 36.9246 46.1794 36.683L47.2605 43.668ZM26.0537 23.1227C24.8616 21.3545 23.5103 19.3501 22.8999 16.1075C22.2899 12.8625 23.2189 9.98259 23.8965 7.87961C24.2583 6.75982 24.5436 5.87421 24.5318 5.17468C24.5113 3.93812 24.1139 2.90716 23.8047 2.28771L25.5177 1.86173C25.7744 2.3264 26.2236 3.3079 26.2435 4.51148C26.2529 5.0421 25.977 5.89709 25.6577 6.88633C24.9457 9.09261 23.9716 12.1155 24.6294 15.6152C25.2781 19.0654 26.7539 21.2539 27.94 23.012C28.5396 23.9013 29.0571 24.6691 29.3909 25.4609C30.2085 27.4 30.3636 30.618 30.3932 31.7368L28.6752 32.1645C28.6318 30.8273 28.4407 27.7428 27.5991 25.7445C27.227 24.8619 26.6573 24.017 26.0537 23.1227ZM27.619 31.4505C27.6647 32.2506 27.6674 32.7991 27.6674 32.8142C27.6674 32.9714 27.7398 33.1197 27.8639 33.2163C27.9541 33.2873 28.0655 33.3243 28.1779 33.3243C28.2189 33.3243 28.2603 33.3193 28.3007 33.3095L31.0335 32.6295C31.2613 32.573 31.4208 32.3684 31.4208 32.1342C31.4208 32.0255 31.4148 30.4559 31.1866 28.6651C31.4117 28.5171 31.6358 28.3687 31.868 28.225C37.9004 24.4895 43.2046 23.9992 44.3725 25.8838C45.5404 27.7688 42.7382 32.2964 36.7055 36.0323C31.5527 39.2231 26.9417 40.0394 24.9753 39.0374L24.5113 38.7318C24.3898 38.6232 24.2828 38.5057 24.2007 38.3735C23.3178 36.9475 24.7152 34.1753 27.619 31.4505ZM21.0355 32.501C21.0954 32.6867 21.2559 32.8223 21.449 32.8506C21.4732 32.8539 21.4978 32.8556 21.522 32.8556C21.6893 32.8556 21.8484 32.7735 21.944 32.6325L23.5146 30.3223C23.6139 30.1756 23.6311 29.9885 23.5587 29.8266C23.5015 29.6981 22.1189 26.6698 19.237 25.6806C18.0466 25.2714 16.5967 25.2001 15.0613 25.1247C13.0105 25.0234 10.8904 24.9191 9.38329 23.9807C7.4371 22.7687 7.50877 20.1765 7.56194 18.2845C7.57674 17.7603 7.58953 17.3074 7.55689 16.9379C7.39605 15.0933 6.14873 14.0816 6.09624 14.0398C6.00539 13.9675 5.89436 13.9285 5.77827 13.9285H1.96868C1.74425 13.9285 1.54607 14.0765 1.48079 14.2919C1.41585 14.5072 1.50031 14.7404 1.68739 14.8649C1.69984 14.8733 2.96937 15.732 3.44548 17.3461C3.57065 17.771 3.60329 18.4349 3.64064 19.2027C3.74932 21.4268 3.91251 24.7879 6.75675 26.9851C9.15213 28.8371 12.2703 28.862 14.7753 28.8825C16.2114 28.8936 17.452 28.904 18.2118 29.2395C20.2542 30.1409 21.0277 32.4777 21.0355 32.501ZM14.7834 27.8616C12.3086 27.8418 9.50374 27.8189 7.38024 26.1776C4.90882 24.2681 4.76548 21.3121 4.66016 19.1533C4.61945 18.3195 4.58479 17.5998 4.42429 17.0574C4.15814 16.1539 3.69683 15.4514 3.26647 14.949H5.57773C5.83951 15.2131 6.44382 15.9335 6.53972 17.0264C6.56731 17.337 6.5552 17.7626 6.5414 18.2549C6.48521 20.2741 6.40008 23.3249 8.84391 24.8461C10.5754 25.9245 12.8308 26.0359 15.0109 26.1429C16.4715 26.2149 17.8511 26.2825 18.9049 26.6443C20.9221 27.3371 22.1277 29.3007 22.5012 29.9956L21.6209 31.291C21.1519 30.3798 20.2209 29.01 18.6243 28.3044C17.6707 27.8845 16.3329 27.8744 14.7834 27.8616ZM7.1696 30.8899C7.00507 30.966 6.89302 31.1241 6.8762 31.3048L6.62148 33.9677C6.60298 34.1585 6.69383 34.3438 6.85634 34.4468C6.93945 34.5 7.03434 34.5259 7.12923 34.5259C7.2194 34.5259 7.30992 34.502 7.39 34.4539C8.59122 33.7402 9.87017 33.6383 11.2988 34.1406C11.4402 34.1908 11.5976 34.1749 11.7295 34.0979C11.8594 34.0208 11.9482 33.8896 11.9725 33.7402L12.418 30.9589C12.4604 30.6944 12.2915 30.4424 12.0307 30.3815C10.3776 29.9942 8.74129 30.1641 7.1696 30.8899ZM11.0569 33.0016C9.888 32.7005 8.77191 32.754 7.72378 33.1598L7.86308 31.7001C8.99196 31.2318 10.1555 31.0931 11.3318 31.2833L11.0569 33.0016ZM14.9664 10.3981C15.0243 10.3981 15.0829 10.388 15.1384 10.3682L17.0758 9.67539C17.279 9.60237 17.414 9.40991 17.414 9.1949C17.4116 6.67099 16.7996 4.81566 15.5422 3.52392C15.4382 3.41625 15.2915 3.36477 15.1428 3.37015L12.496 3.54714C12.3056 3.55992 12.1384 3.67836 12.0616 3.85333C11.9853 4.0283 12.0132 4.23086 12.134 4.37891C13.565 6.13263 14.3251 7.94657 14.4574 9.92236C14.4678 10.0819 14.5533 10.2272 14.6868 10.315C14.7716 10.3695 14.8685 10.3981 14.9664 10.3981ZM13.5085 4.50172L14.9675 4.40448C15.8702 5.43141 16.3373 6.88633 16.3884 8.83723L15.4079 9.18817C15.1855 7.55323 14.5492 5.98289 13.5085 4.50172ZM32.6779 24.0009C32.763 24.186 32.9468 24.298 33.1419 24.298C33.1907 24.298 33.2402 24.2909 33.29 24.2761L36.2395 23.3824C36.3913 23.3363 36.5127 23.2226 36.5693 23.0742C36.6248 22.9262 36.609 22.7606 36.5259 22.6254C36.5053 22.5927 34.4925 19.2936 34.3048 15.488C34.1931 13.2205 34.831 10.8369 35.3946 8.73426C35.8001 7.21776 36.1503 5.90887 36.1473 4.89708C36.1379 2.51584 35.0699 0.370461 35.0238 0.280285C34.9367 0.108682 34.761 0 34.5682 0H31.7496C31.5726 0 31.408 0.0925312 31.3152 0.242936C31.222 0.393341 31.2142 0.581768 31.2933 0.739912C31.3041 0.760101 32.2997 2.76718 32.3074 4.90179C32.3108 5.77663 31.9767 7.02564 31.5894 8.47148C31.007 10.6468 30.3471 13.1118 30.4673 15.5385C30.6658 19.5813 32.5958 23.8222 32.6779 24.0009ZM32.5753 8.7346C32.9811 7.21844 33.3317 5.90887 33.328 4.89776C33.3219 3.33045 32.8569 1.86475 32.5275 1.02053H34.2405C34.512 1.64739 35.1204 3.23522 35.1261 4.90112C35.1291 5.7763 34.7954 7.02463 34.4081 8.47047C33.8256 10.6458 33.1658 13.1112 33.2853 15.5382C33.441 18.6883 34.7203 21.4376 35.3344 22.5907L33.4296 23.1678C32.9494 22.0194 31.6419 18.6368 31.4868 15.488C31.3744 13.2208 32.0124 10.8376 32.5753 8.7346ZM41.3328 7.96945L43.2588 8.54685C43.3069 8.56132 43.3557 8.56838 43.4051 8.56838C43.5108 8.56838 43.6154 8.53574 43.7032 8.47249C43.8318 8.37995 43.9098 8.23325 43.9152 8.07511C43.9606 6.672 44.5959 5.45563 45.8591 4.35737C45.9872 4.24634 46.0515 4.07776 46.0303 3.90952C46.0095 3.74129 45.9058 3.59357 45.7537 3.51719L43.464 2.36173C43.2588 2.25709 43.0057 2.30453 42.8516 2.47916C41.6756 3.8106 41.0431 5.48693 40.9694 7.46171C40.9603 7.69388 41.1097 7.90249 41.3328 7.96945ZM43.3671 3.45562L44.6474 4.10132C43.6999 5.08585 43.1322 6.18747 42.9536 7.3897L42.0124 7.10774C42.1279 5.68949 42.5828 4.46471 43.3671 3.45562ZM45.2174 17.9726C45.1676 17.8427 45.067 17.7384 44.9388 17.6849L42.8234 16.7966C42.572 16.6923 42.281 16.802 42.1642 17.0493C41.468 18.5247 41.2311 20.2465 41.461 22.1668C41.4859 22.3723 41.6329 22.5433 41.8328 22.5985L43.8065 23.1385C43.851 23.1503 43.8964 23.1563 43.9411 23.1563C44.0616 23.1563 44.1804 23.1136 44.2742 23.0328C44.4031 22.9218 44.4677 22.7542 44.4479 22.5857C44.2396 20.8484 44.5821 19.6852 45.2022 18.373C45.2618 18.2471 45.2675 18.1018 45.2174 17.9726ZM43.3742 21.9615L42.4391 21.7054C42.3146 20.3081 42.4677 19.0429 42.896 17.9329L44.0609 18.4221C43.5986 19.5015 43.317 20.5816 43.3742 21.9615ZM15.9372 19.051C16.199 19.1731 16.4658 19.2344 16.7222 19.2344C16.9843 19.2344 17.2346 19.1704 17.4554 19.0429C17.8918 18.7909 18.171 18.3134 18.2215 17.733C18.2663 17.2121 18.128 16.6428 17.8332 16.1314C17.5381 15.6203 17.1142 15.2162 16.6401 14.9944C16.1111 14.7464 15.559 14.7498 15.1216 15.0018C14.6855 15.2538 14.4062 15.7316 14.3557 16.3121C14.3107 16.8336 14.4489 17.4029 14.744 17.914C15.0391 18.4251 15.4631 18.8292 15.9372 19.051ZM15.632 15.8861C15.7023 15.8457 15.779 15.8306 15.8544 15.8306C15.9907 15.8306 16.1229 15.88 16.2067 15.9194C16.4893 16.0513 16.7599 16.3147 16.9486 16.6421C17.1374 16.9695 17.2309 17.3349 17.204 17.6462C17.1922 17.7889 17.1418 18.0463 16.9443 18.1603C16.7491 18.2737 16.5001 18.1889 16.3696 18.1277C16.0866 17.9955 15.8167 17.7323 15.628 17.4049C15.4392 17.0772 15.3457 16.7121 15.3729 16.4009C15.385 16.2565 15.4352 15.9995 15.632 15.8861ZM46.0222 12.1589C46.3527 12.1589 46.6945 12.0496 47.0098 11.8376C47.4442 11.5452 47.8002 11.0809 48.0125 10.53C48.4842 9.30897 48.1229 8.07073 47.1898 7.71137C46.2554 7.35067 45.1572 8.02497 44.6858 9.24638C44.2147 10.4668 44.5764 11.7043 45.5088 12.064C45.6723 12.1273 45.8456 12.1589 46.0222 12.1589ZM45.637 9.61348C45.8782 8.98931 46.3365 8.63702 46.6737 8.63702C46.7265 8.63702 46.776 8.64577 46.8214 8.66327C47.1579 8.79315 47.3389 9.44053 47.0603 10.1626C47.0603 10.1626 47.0603 10.1626 47.0603 10.1629C46.924 10.5152 46.6979 10.8171 46.4391 10.9917C46.3197 11.0711 46.0882 11.1936 45.8759 11.1125C45.5401 10.9823 45.3587 10.3349 45.637 9.61348ZM37.4071 18.4921C37.5461 19.0577 37.8957 19.4867 38.3661 19.6684C38.5299 19.7317 38.7035 19.7633 38.8802 19.7633C39.2103 19.7633 39.5521 19.6543 39.8677 19.442C40.3018 19.1496 40.6581 18.6852 40.8704 18.1344C41.3419 16.9137 40.9808 15.6758 40.0478 15.3161C39.5787 15.1357 39.0306 15.2172 38.5467 15.5432C38.1127 15.8356 37.7564 16.2999 37.544 16.8508C37.3307 17.4009 37.2823 17.984 37.4071 18.4921ZM38.4953 17.2172C38.6315 16.8652 38.8576 16.5631 39.1164 16.3884C39.2083 16.3269 39.3661 16.2401 39.5303 16.2401C39.5804 16.2401 39.6302 16.2481 39.6797 16.2673C40.0161 16.3972 40.1972 17.0446 39.9186 17.7666C39.9186 17.7666 39.9186 17.7666 39.9186 17.767C39.7823 18.1189 39.5562 18.4211 39.2974 18.5954C39.178 18.6751 38.9465 18.7976 38.7342 18.7165C38.5218 18.6348 38.4327 18.3878 38.3983 18.2481C38.3237 17.946 38.359 17.5695 38.4953 17.2172ZM36.3977 33.3092C36.5615 33.3092 36.7244 33.2802 36.8812 33.22C37.3607 33.0356 37.7059 32.58 37.8274 31.9703C37.9333 31.4357 37.8671 30.8159 37.6399 30.2254C37.1315 28.9054 36.0036 28.152 35.0692 28.5107C34.1359 28.8697 33.8031 30.1853 34.3112 31.5057C34.7334 32.6036 35.5857 33.3092 36.3977 33.3092ZM35.4357 29.4629C35.474 29.4481 35.5154 29.441 35.5592 29.441C35.9054 29.441 36.4135 29.8798 36.687 30.5921C36.8438 30.9986 36.8943 31.4286 36.826 31.7711C36.7738 32.0306 36.6611 32.2119 36.5151 32.2678C36.1729 32.4 35.5719 31.9414 35.2637 31.1396C34.9545 30.3364 35.0999 29.5921 35.4357 29.4629ZM28.1732 37.5404C28.6089 37.8257 29.0914 37.964 29.5419 37.964C30.1395 37.964 30.6816 37.7201 30.9888 37.2517C31.2607 36.8365 31.3091 36.2981 31.1214 35.7759C30.9494 35.2974 30.5961 34.864 30.1267 34.5565C29.6577 34.2493 29.1251 34.0999 28.6106 34.1332C28.0567 34.1702 27.5833 34.43 27.3111 34.8452C26.7727 35.6682 27.1597 36.8768 28.1732 37.5404ZM28.1654 35.4044C28.2956 35.2049 28.5433 35.1601 28.6789 35.1514C28.7034 35.1497 28.728 35.1487 28.7522 35.1487C29.0184 35.1487 29.3111 35.2422 29.5679 35.4105C29.8491 35.5942 30.0655 35.8529 30.1614 36.1211C30.2075 36.2493 30.265 36.4936 30.1348 36.6925C29.9117 37.032 29.2566 37.0299 28.7331 36.6864C28.2085 36.3432 27.943 35.7443 28.1654 35.4044ZM30.831 8.66764C30.692 8.10202 30.3428 7.67302 29.872 7.49132C29.4016 7.30962 28.8545 7.39273 28.371 7.71777C27.937 8.01017 27.5806 8.4745 27.3683 9.02532C27.1557 9.57647 27.1069 10.1596 27.232 10.6677C27.371 11.2333 27.7206 11.6623 28.191 11.844C28.3549 11.9072 28.5285 11.9389 28.7048 11.9389C29.0352 11.9389 29.3771 11.8299 29.6924 11.6175C30.1267 11.3251 30.4831 10.8611 30.6954 10.31C30.908 9.75917 30.9565 9.17606 30.831 8.66764ZM29.7435 9.94222C29.6072 10.2948 29.3811 10.5967 29.1224 10.7713C29.0029 10.8507 28.7714 10.9739 28.5591 10.8921C28.3468 10.8103 28.2573 10.5637 28.2233 10.4237C28.1486 10.1212 28.1843 9.74538 28.3202 9.39275C28.4565 9.04079 28.6826 8.73864 28.9413 8.56434C29.0332 8.5031 29.1903 8.41629 29.3552 8.41629C29.405 8.41629 29.4551 8.42437 29.5046 8.44321C29.7169 8.52498 29.8061 8.77195 29.8404 8.91159C29.9148 9.21408 29.8791 9.59026 29.7435 9.94222ZM38.3661 5.21438C38.5299 5.27764 38.7029 5.30927 38.8802 5.30927C39.2099 5.30927 39.5521 5.20025 39.8677 4.9876C40.3018 4.6952 40.6581 4.23086 40.8704 3.68005C41.0831 3.12957 41.1316 2.54646 41.0067 2.03838C40.8678 1.47242 40.5182 1.04341 40.0478 0.861717C39.5774 0.68002 39.0296 0.763466 38.5467 1.08817C38.1127 1.38056 37.7564 1.84524 37.544 2.39571C37.331 2.94686 37.2826 3.52998 37.4078 4.03806C37.5467 4.60368 37.8957 5.03302 38.3661 5.21438ZM38.4953 2.76315C38.6315 2.41119 38.8576 2.1087 39.1164 1.93407C39.2083 1.87283 39.3654 1.78636 39.5303 1.78636C39.5804 1.78636 39.6302 1.79443 39.6797 1.81327C39.892 1.8947 39.9815 2.14167 40.0155 2.28165C40.0902 2.58414 40.0545 2.95999 39.9186 3.31261C39.9186 3.31261 39.9186 3.31261 39.9186 3.31295C39.7823 3.66524 39.5562 3.96706 39.2974 4.14169C39.178 4.22211 38.9458 4.34459 38.7342 4.26316C38.5218 4.1814 38.4327 3.93442 38.3983 3.79479C38.3237 3.49229 38.359 3.11577 38.4953 2.76315ZM3.48889 9.69625C3.3267 10.1737 3.43168 10.7164 3.77691 11.1865C4.08647 11.6078 4.56595 11.9446 5.12517 12.1347C5.45391 12.2464 5.78096 12.2992 6.0912 12.2992C6.94955 12.2992 7.6723 11.8921 7.90851 11.1973C8.07069 10.7198 7.96571 10.1767 7.62082 9.70702C7.31092 9.28575 6.83178 8.94894 6.27222 8.75849C5.03432 8.33756 3.81056 8.74941 3.48889 9.69625ZM6.79813 10.3117C6.88326 10.4278 7.0155 10.6539 6.94181 10.8692C6.82673 11.2104 6.18709 11.4187 5.45324 11.1687C5.09556 11.0472 4.78432 10.8335 4.5996 10.5825C4.51413 10.4661 4.38223 10.24 4.45558 10.0247C4.53566 9.78811 4.86878 9.61583 5.31023 9.61583C5.50472 9.61583 5.72006 9.64881 5.94416 9.72519C6.30183 9.84666 6.61274 10.0607 6.79813 10.3117ZM2.85765 27.2576C1.61976 26.8367 0.396327 27.2486 0.074319 28.1957C-0.0875264 28.6732 0.0177909 29.2163 0.36268 29.6853C0.672238 30.1069 1.15172 30.4434 1.71094 30.6339C2.03968 30.7456 2.36674 30.7981 2.67697 30.7981C3.53532 30.7981 4.25807 30.3916 4.49495 29.6961C4.6568 29.2186 4.55148 28.6759 4.20659 28.2058C3.89569 27.7846 3.41688 27.4478 2.85765 27.2576ZM3.52792 29.3677C3.4115 29.7096 2.77185 29.9165 2.03867 29.6672C1.681 29.5457 1.36942 29.332 1.18469 29.081C1.09956 28.9653 0.967328 28.7385 1.04102 28.5235C1.1211 28.2866 1.45421 28.1143 1.89567 28.1143C2.09015 28.1143 2.3055 28.1473 2.52959 28.224C2.88726 28.3451 3.19851 28.5591 3.38323 28.8102C3.4687 28.9262 3.6006 29.1534 3.52792 29.3677ZM16.8615 33.1924C16.3033 33.0027 15.7188 32.9781 15.2144 33.1241C14.6542 33.2856 14.2403 33.6531 14.0781 34.1305C13.9156 34.608 14.0209 35.1507 14.3658 35.6201C14.6757 36.0417 15.1549 36.3782 15.7141 36.5686C16.0327 36.6766 16.3591 36.7308 16.6747 36.7308C16.913 36.7308 17.1448 36.6992 17.3615 36.6366C17.9221 36.4748 18.3359 36.108 18.4981 35.6305C18.6603 35.1527 18.5546 34.61 18.2104 34.1403C17.8998 33.7193 17.4214 33.3825 16.8615 33.1924ZM17.5314 35.3028C17.4584 35.5178 17.2161 35.6167 17.0778 35.6564C16.7787 35.7443 16.4022 35.7237 16.0428 35.6019C15.6852 35.4805 15.3739 35.2668 15.1892 35.0158C15.1044 34.8997 14.9722 34.6733 15.0455 34.4579C15.1185 34.2429 15.3611 34.1436 15.4994 34.1039C15.6222 34.0683 15.7585 34.0508 15.9008 34.0508C16.1051 34.0508 16.3224 34.0871 16.5338 34.1591C16.8914 34.2806 17.2033 34.4943 17.3877 34.7453C17.4729 34.861 17.6044 35.0875 17.5314 35.3028Z\" fill=\"white\"/> </mask> <g mask=\"url(#mask0_863_10007)\"> <path d=\"M-0.0859375 0V64.2805H60.0603V0H-0.0859375Z\" fill=\"url(#paint0_linear_863_10007)\"/> </g> <defs> <linearGradient id=\"paint0_linear_863_10007\" x1=\"30.0017\" y1=\"0.000116203\" x2=\"30.0017\" y2=\"64.2806\" gradientUnits=\"userSpaceOnUse\"> <stop stop-color=\"#F9C621\"/> <stop offset=\"0.00390625\" stop-color=\"#F9C522\"/> <stop offset=\"0.0078125\" stop-color=\"#F9C423\"/> <stop offset=\"0.0117188\" stop-color=\"#F9C423\"/> <stop offset=\"0.015625\" stop-color=\"#F9C324\"/> <stop offset=\"0.0195312\" stop-color=\"#F9C225\"/> <stop offset=\"0.0234375\" stop-color=\"#F9C126\"/> <stop offset=\"0.0273438\" stop-color=\"#F9C127\"/> <stop offset=\"0.03125\" stop-color=\"#F9C027\"/> <stop offset=\"0.0351562\" stop-color=\"#F9BF28\"/> <stop offset=\"0.0390625\" stop-color=\"#F9BE29\"/> <stop offset=\"0.0429688\" stop-color=\"#F9BD2A\"/> <stop offset=\"0.046875\" stop-color=\"#F9BD2B\"/> <stop offset=\"0.0507813\" stop-color=\"#F9BC2C\"/> <stop offset=\"0.0546875\" stop-color=\"#F9BB2C\"/> <stop offset=\"0.0585938\" stop-color=\"#F9BA2D\"/> <stop offset=\"0.0625\" stop-color=\"#F9BA2E\"/> <stop offset=\"0.0664062\" stop-color=\"#F9B92F\"/> <stop offset=\"0.0703125\" stop-color=\"#F9B830\"/> <stop offset=\"0.0742188\" stop-color=\"#F9B731\"/> <stop offset=\"0.078125\" stop-color=\"#F9B731\"/> <stop offset=\"0.0820312\" stop-color=\"#F9B632\"/> <stop offset=\"0.0859375\" stop-color=\"#F9B533\"/> <stop offset=\"0.0898438\" stop-color=\"#F9B434\"/> <stop offset=\"0.09375\" stop-color=\"#F9B435\"/> <stop offset=\"0.0976563\" stop-color=\"#F9B336\"/> <stop offset=\"0.101563\" stop-color=\"#F9B236\"/> <stop offset=\"0.105469\" stop-color=\"#FAB137\"/> <stop offset=\"0.109375\" stop-color=\"#FAB038\"/> <stop offset=\"0.113281\" stop-color=\"#FAB039\"/> <stop offset=\"0.117188\" stop-color=\"#FAAF3A\"/> <stop offset=\"0.121094\" stop-color=\"#FAAE3A\"/> <stop offset=\"0.125\" stop-color=\"#FAAD3B\"/> <stop offset=\"0.128906\" stop-color=\"#FAAD3C\"/> <stop offset=\"0.132812\" stop-color=\"#FAAC3D\"/> <stop offset=\"0.136719\" stop-color=\"#FAAB3E\"/> <stop offset=\"0.140625\" stop-color=\"#FAAA3F\"/> <stop offset=\"0.144531\" stop-color=\"#FAAA3F\"/> <stop offset=\"0.148438\" stop-color=\"#FAA940\"/> <stop offset=\"0.152344\" stop-color=\"#FAA841\"/> <stop offset=\"0.15625\" stop-color=\"#FAA742\"/> <stop offset=\"0.160156\" stop-color=\"#FAA743\"/> <stop offset=\"0.164062\" stop-color=\"#FAA644\"/> <stop offset=\"0.167969\" stop-color=\"#FAA544\"/> <stop offset=\"0.171875\" stop-color=\"#FAA445\"/> <stop offset=\"0.175781\" stop-color=\"#FAA346\"/> <stop offset=\"0.179688\" stop-color=\"#FAA347\"/> <stop offset=\"0.183594\" stop-color=\"#FAA248\"/> <stop offset=\"0.1875\" stop-color=\"#FAA148\"/> <stop offset=\"0.191406\" stop-color=\"#FAA049\"/> <stop offset=\"0.195313\" stop-color=\"#FAA04A\"/> <stop offset=\"0.199219\" stop-color=\"#FA9F4B\"/> <stop offset=\"0.203125\" stop-color=\"#FA9E4C\"/> <stop offset=\"0.207031\" stop-color=\"#FA9D4D\"/> <stop offset=\"0.210938\" stop-color=\"#FA9D4D\"/> <stop offset=\"0.214844\" stop-color=\"#FA9C4E\"/> <stop offset=\"0.21875\" stop-color=\"#FA9B4F\"/> <stop offset=\"0.222656\" stop-color=\"#FA9A50\"/> <stop offset=\"0.226563\" stop-color=\"#FA9A51\"/> <stop offset=\"0.230469\" stop-color=\"#FA9952\"/> <stop offset=\"0.234375\" stop-color=\"#FA9852\"/> <stop offset=\"0.238281\" stop-color=\"#FA9753\"/> <stop offset=\"0.242188\" stop-color=\"#FA9654\"/> <stop offset=\"0.246094\" stop-color=\"#FA9655\"/> <stop offset=\"0.25\" stop-color=\"#FA9556\"/> <stop offset=\"0.253906\" stop-color=\"#FA9457\"/> <stop offset=\"0.257812\" stop-color=\"#FA9357\"/> <stop offset=\"0.261719\" stop-color=\"#FA9358\"/> <stop offset=\"0.265625\" stop-color=\"#FB9259\"/> <stop offset=\"0.269531\" stop-color=\"#FB915A\"/> <stop offset=\"0.273438\" stop-color=\"#FB905B\"/> <stop offset=\"0.277344\" stop-color=\"#FB905B\"/> <stop offset=\"0.28125\" stop-color=\"#FB8F5C\"/> <stop offset=\"0.285156\" stop-color=\"#FB8E5D\"/> <stop offset=\"0.289062\" stop-color=\"#FB8D5E\"/> <stop offset=\"0.292969\" stop-color=\"#FB8C5F\"/> <stop offset=\"0.296875\" stop-color=\"#FB8C60\"/> <stop offset=\"0.300781\" stop-color=\"#FB8B60\"/> <stop offset=\"0.304688\" stop-color=\"#FB8A61\"/> <stop offset=\"0.308594\" stop-color=\"#FB8962\"/> <stop offset=\"0.3125\" stop-color=\"#FB8963\"/> <stop offset=\"0.316406\" stop-color=\"#FB8864\"/> <stop offset=\"0.320313\" stop-color=\"#FB8765\"/> <stop offset=\"0.324219\" stop-color=\"#FB8665\"/> <stop offset=\"0.328125\" stop-color=\"#FB8666\"/> <stop offset=\"0.332031\" stop-color=\"#FB8567\"/> <stop offset=\"0.335938\" stop-color=\"#FB8468\"/> <stop offset=\"0.339844\" stop-color=\"#FB8369\"/> <stop offset=\"0.34375\" stop-color=\"#FB8369\"/> <stop offset=\"0.347656\" stop-color=\"#FB826A\"/> <stop offset=\"0.351563\" stop-color=\"#FB816B\"/> <stop offset=\"0.355469\" stop-color=\"#FB806C\"/> <stop offset=\"0.359375\" stop-color=\"#FB806D\"/> <stop offset=\"0.363281\" stop-color=\"#FB7F6E\"/> <stop offset=\"0.367188\" stop-color=\"#FB7E6E\"/> <stop offset=\"0.371094\" stop-color=\"#FB7D6F\"/> <stop offset=\"0.375\" stop-color=\"#FB7C70\"/> <stop offset=\"0.378906\" stop-color=\"#FB7C71\"/> <stop offset=\"0.382813\" stop-color=\"#FB7B72\"/> <stop offset=\"0.386719\" stop-color=\"#FB7A73\"/> <stop offset=\"0.390625\" stop-color=\"#FB7973\"/> <stop offset=\"0.394531\" stop-color=\"#FB7974\"/> <stop offset=\"0.398438\" stop-color=\"#FB7875\"/> <stop offset=\"0.402344\" stop-color=\"#FB7776\"/> <stop offset=\"0.40625\" stop-color=\"#FB7677\"/> <stop offset=\"0.410156\" stop-color=\"#FB7677\"/> <stop offset=\"0.414062\" stop-color=\"#FB7578\"/> <stop offset=\"0.417969\" stop-color=\"#FB7479\"/> <stop offset=\"0.421875\" stop-color=\"#FB737A\"/> <stop offset=\"0.425781\" stop-color=\"#FB727B\"/> <stop offset=\"0.429688\" stop-color=\"#FC727C\"/> <stop offset=\"0.433594\" stop-color=\"#FC717C\"/> <stop offset=\"0.4375\" stop-color=\"#FC707D\"/> <stop offset=\"0.441406\" stop-color=\"#FC6F7E\"/> <stop offset=\"0.445312\" stop-color=\"#FC6F7F\"/> <stop offset=\"0.449219\" stop-color=\"#FC6E80\"/> <stop offset=\"0.453125\" stop-color=\"#FC6D81\"/> <stop offset=\"0.457031\" stop-color=\"#FC6C81\"/> <stop offset=\"0.460938\" stop-color=\"#FC6C82\"/> <stop offset=\"0.464844\" stop-color=\"#FC6B83\"/> <stop offset=\"0.46875\" stop-color=\"#FC6A84\"/> <stop offset=\"0.472656\" stop-color=\"#FC6985\"/> <stop offset=\"0.476563\" stop-color=\"#FC6986\"/> <stop offset=\"0.480469\" stop-color=\"#FC6886\"/> <stop offset=\"0.484375\" stop-color=\"#FC6787\"/> <stop offset=\"0.488281\" stop-color=\"#FC6688\"/> <stop offset=\"0.492188\" stop-color=\"#FC6589\"/> <stop offset=\"0.496094\" stop-color=\"#FC658A\"/> <stop offset=\"0.5\" stop-color=\"#FC648A\"/> <stop offset=\"0.503906\" stop-color=\"#FC638B\"/> <stop offset=\"0.507812\" stop-color=\"#FC628C\"/> <stop offset=\"0.511719\" stop-color=\"#FC628D\"/> <stop offset=\"0.515625\" stop-color=\"#FC618E\"/> <stop offset=\"0.519531\" stop-color=\"#FC608F\"/> <stop offset=\"0.523438\" stop-color=\"#FC5F8F\"/> <stop offset=\"0.527344\" stop-color=\"#FC5F90\"/> <stop offset=\"0.53125\" stop-color=\"#FC5E91\"/> <stop offset=\"0.535156\" stop-color=\"#FC5D92\"/> <stop offset=\"0.539062\" stop-color=\"#FC5C93\"/> <stop offset=\"0.542969\" stop-color=\"#FC5C94\"/> <stop offset=\"0.546875\" stop-color=\"#FC5B94\"/> <stop offset=\"0.550781\" stop-color=\"#FC5A95\"/> <stop offset=\"0.554687\" stop-color=\"#FC5996\"/> <stop offset=\"0.558594\" stop-color=\"#FC5897\"/> <stop offset=\"0.5625\" stop-color=\"#FC5898\"/> <stop offset=\"0.566406\" stop-color=\"#FC5798\"/> <stop offset=\"0.570312\" stop-color=\"#FC5699\"/> <stop offset=\"0.574219\" stop-color=\"#FC559A\"/> <stop offset=\"0.578125\" stop-color=\"#FC559B\"/> <stop offset=\"0.582031\" stop-color=\"#FC549C\"/> <stop offset=\"0.585937\" stop-color=\"#FC539D\"/> <stop offset=\"0.589844\" stop-color=\"#FC529D\"/> <stop offset=\"0.59375\" stop-color=\"#FD529E\"/> <stop offset=\"0.597656\" stop-color=\"#FD519F\"/> <stop offset=\"0.601562\" stop-color=\"#FD50A0\"/> <stop offset=\"0.605469\" stop-color=\"#FD4FA1\"/> <stop offset=\"0.609375\" stop-color=\"#FD4FA2\"/> <stop offset=\"0.613281\" stop-color=\"#FD4EA2\"/> <stop offset=\"0.617187\" stop-color=\"#FD4DA3\"/> <stop offset=\"0.621094\" stop-color=\"#FD4CA4\"/> <stop offset=\"0.625\" stop-color=\"#FD4BA5\"/> <stop offset=\"0.628906\" stop-color=\"#FD4BA6\"/> <stop offset=\"0.632812\" stop-color=\"#FD4AA7\"/> <stop offset=\"0.636719\" stop-color=\"#FD49A7\"/> <stop offset=\"0.640625\" stop-color=\"#FD48A8\"/> <stop offset=\"0.644531\" stop-color=\"#FD48A9\"/> <stop offset=\"0.648437\" stop-color=\"#FD47AA\"/> <stop offset=\"0.652344\" stop-color=\"#FD46AB\"/> <stop offset=\"0.65625\" stop-color=\"#FD45AB\"/> <stop offset=\"0.660156\" stop-color=\"#FD45AC\"/> <stop offset=\"0.664062\" stop-color=\"#FD44AD\"/> <stop offset=\"0.667969\" stop-color=\"#FD43AE\"/> <stop offset=\"0.671875\" stop-color=\"#FD42AF\"/> <stop offset=\"0.675781\" stop-color=\"#FD42B0\"/> <stop offset=\"0.679688\" stop-color=\"#FD41B0\"/> <stop offset=\"0.683594\" stop-color=\"#FD40B1\"/> <stop offset=\"0.6875\" stop-color=\"#FD3FB2\"/> <stop offset=\"0.691406\" stop-color=\"#FD3EB3\"/> <stop offset=\"0.695313\" stop-color=\"#FD3EB4\"/> <stop offset=\"0.699219\" stop-color=\"#FD3DB5\"/> <stop offset=\"0.703125\" stop-color=\"#FD3CB5\"/> <stop offset=\"0.707031\" stop-color=\"#FD3BB6\"/> <stop offset=\"0.710938\" stop-color=\"#FD3BB7\"/> <stop offset=\"0.714844\" stop-color=\"#FD3AB8\"/> <stop offset=\"0.71875\" stop-color=\"#FD39B9\"/> <stop offset=\"0.722656\" stop-color=\"#FD38B9\"/> <stop offset=\"0.726563\" stop-color=\"#FD38BA\"/> <stop offset=\"0.730469\" stop-color=\"#FD37BB\"/> <stop offset=\"0.734375\" stop-color=\"#FD36BC\"/> <stop offset=\"0.738281\" stop-color=\"#FD35BD\"/> <stop offset=\"0.742188\" stop-color=\"#FD35BE\"/> <stop offset=\"0.746094\" stop-color=\"#FD34BE\"/> <stop offset=\"0.75\" stop-color=\"#FD33BF\"/> <stop offset=\"0.753906\" stop-color=\"#FD32C0\"/> <stop offset=\"0.757813\" stop-color=\"#FE31C1\"/> <stop offset=\"0.761719\" stop-color=\"#FE31C2\"/> <stop offset=\"0.765625\" stop-color=\"#FE30C3\"/> <stop offset=\"0.769531\" stop-color=\"#FE2FC3\"/> <stop offset=\"0.773438\" stop-color=\"#FE2EC4\"/> <stop offset=\"0.777344\" stop-color=\"#FE2EC5\"/> <stop offset=\"0.78125\" stop-color=\"#FE2DC6\"/> <stop offset=\"0.785156\" stop-color=\"#FE2CC7\"/> <stop offset=\"0.789063\" stop-color=\"#FE2BC7\"/> <stop offset=\"0.792969\" stop-color=\"#FE2BC8\"/> <stop offset=\"0.796875\" stop-color=\"#FE2AC9\"/> <stop offset=\"0.800781\" stop-color=\"#FE29CA\"/> <stop offset=\"0.804688\" stop-color=\"#FE28CB\"/> <stop offset=\"0.808594\" stop-color=\"#FE28CC\"/> <stop offset=\"0.8125\" stop-color=\"#FE27CC\"/> <stop offset=\"0.816406\" stop-color=\"#FE26CD\"/> <stop offset=\"0.820313\" stop-color=\"#FE25CE\"/> <stop offset=\"0.824219\" stop-color=\"#FE24CF\"/> <stop offset=\"0.828125\" stop-color=\"#FE24D0\"/> <stop offset=\"0.832031\" stop-color=\"#FE23D1\"/> <stop offset=\"0.835938\" stop-color=\"#FE22D1\"/> <stop offset=\"0.839844\" stop-color=\"#FE21D2\"/> <stop offset=\"0.84375\" stop-color=\"#FE21D3\"/> <stop offset=\"0.847656\" stop-color=\"#FE20D4\"/> <stop offset=\"0.851563\" stop-color=\"#FE1FD5\"/> <stop offset=\"0.855469\" stop-color=\"#FE1ED6\"/> <stop offset=\"0.859375\" stop-color=\"#FE1ED6\"/> <stop offset=\"0.863281\" stop-color=\"#FE1DD7\"/> <stop offset=\"0.867188\" stop-color=\"#FE1CD8\"/> <stop offset=\"0.871094\" stop-color=\"#FE1BD9\"/> <stop offset=\"0.875\" stop-color=\"#FE1BDA\"/> <stop offset=\"0.878906\" stop-color=\"#FE1ADA\"/> <stop offset=\"0.882812\" stop-color=\"#FE19DB\"/> <stop offset=\"0.886719\" stop-color=\"#FE18DC\"/> <stop offset=\"0.890625\" stop-color=\"#FE17DD\"/> <stop offset=\"0.894531\" stop-color=\"#FE17DE\"/> <stop offset=\"0.898438\" stop-color=\"#FE16DF\"/> <stop offset=\"0.902344\" stop-color=\"#FE15DF\"/> <stop offset=\"0.90625\" stop-color=\"#FE14E0\"/> <stop offset=\"0.910156\" stop-color=\"#FE14E1\"/> <stop offset=\"0.914062\" stop-color=\"#FE13E2\"/> <stop offset=\"0.917969\" stop-color=\"#FE12E3\"/> <stop offset=\"0.921875\" stop-color=\"#FF11E4\"/> <stop offset=\"0.925781\" stop-color=\"#FF11E4\"/> <stop offset=\"0.929687\" stop-color=\"#FF10E5\"/> <stop offset=\"0.933594\" stop-color=\"#FF0FE6\"/> <stop offset=\"0.9375\" stop-color=\"#FF0EE7\"/> <stop offset=\"0.941406\" stop-color=\"#FF0EE8\"/> <stop offset=\"0.945312\" stop-color=\"#FF0DE8\"/> <stop offset=\"0.949219\" stop-color=\"#FF0CE9\"/> <stop offset=\"0.953125\" stop-color=\"#FF0BEA\"/> <stop offset=\"0.957031\" stop-color=\"#FF0AEB\"/> <stop offset=\"0.960937\" stop-color=\"#FF0AEC\"/> <stop offset=\"0.964844\" stop-color=\"#FF09ED\"/> <stop offset=\"0.96875\" stop-color=\"#FF08ED\"/> <stop offset=\"0.972656\" stop-color=\"#FF07EE\"/> <stop offset=\"0.976562\" stop-color=\"#FF07EF\"/> <stop offset=\"0.980469\" stop-color=\"#FF06F0\"/> <stop offset=\"0.984375\" stop-color=\"#FF05F1\"/> <stop offset=\"0.988281\" stop-color=\"#FF04F2\"/> <stop offset=\"0.992187\" stop-color=\"#FF04F2\"/> <stop offset=\"0.996094\" stop-color=\"#FF03F3\"/> <stop offset=\"1\" stop-color=\"#FF02F4\"/> </linearGradient> </defs> </svg>") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'confettiRight'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"confetti", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'confetti'
      .setProperty("ClassName","d-none position-absolute top-0 start-0 vw-100 vh-100") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'confetti'
      .setProperty("Html","<img src=\"file:/Users/localid/Projects/21CCN/ejss/interactives/source/cross_cultural/assets/effects/confetti.gif\" alt=\"confetti\" id=\"confetti-gif\" style=\"width: 100vw;\" />") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'confetti'
      ;

    _view._addElement(EJSS_INTERFACE.panel,"copyright", _view._topFrame) // EJsS HtmlView.HtmlView Page: declaration of element 'copyright'
      .setProperty("ClassName","position-absolute") // EJsS HtmlView.HtmlView Page: setting property 'ClassName' for element 'copyright'
      .setProperty("Html","Content and images © 2023 Inter-Religious Organisation, Singapore") // EJsS HtmlView.HtmlView Page: setting property 'Html' for element 'copyright'
      ;

  };

  return _view;
}



      var _model;
      var _scorm;
      window.addEventListener('load',
        function () { 
          _model =  new cross_cultural("_topFrame","file:/Users/localid/Projects/21CCN/ejss/JavaScript_EJS_6.1%20BETA_201115/bin/javascript/lib/","file:/Users/localid/Projects/21CCN/ejss/interactives/source/");
          if (typeof _isApp !== "undefined" && _isApp) _model.setRunAlways(true);
          TextResizeDetector.TARGET_ELEMENT_ID = '_topFrame';
          TextResizeDetector.USER_INIT_FUNC = function () {
            var iBase = TextResizeDetector.addEventListener(function(e,args) {
              _model._fontResized(args[0].iBase,args[0].iSize,args[0].iDelta);
              },null);
            _model._fontResized(iBase);
          };
          _model.onload();
        }, false);
