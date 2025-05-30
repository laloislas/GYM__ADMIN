export const BASIC_LAYOUT_HTML_SNIPPET = `    <form>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="John Deo" />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Company</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="ACME Inc." />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="john.deo" type="email" />
                <span matTextSuffix>&#64;exmaple.com</span>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Phone No</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="123 4561 123" />
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Message
              </mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <textarea
                  rows="5"
                  matInput
                  placeholder="Hi, Do you have a moment to talk Deo ?"
                ></textarea>
              </mat-form-field>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-sm-8">
              <button mat-flat-button>Send</button>
            </div>
          </div>
        </form>
`;

export const BASIC_WITH_ICONS_HTML_SNIPPET = `    <form>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Name</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="John Deo" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="user" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Company</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="ACME Inc." />
                <mat-icon matPrefix class="op-5">
                  <i-tabler
                    name="building-arch"
                    class="icon-20 d-flex"
                  ></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16">Email</mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="john.deo" type="email" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="mail" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Phone No</mat-label
              >
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <input matInput placeholder="123 4561 123" />
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="phone" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4 d-flex align-items-center">
              <mat-label class="f-s-14 f-w-600 d-block m-b-16"
                >Message
              </mat-label>
            </div>
            <div class="col-sm-8">
              <mat-form-field appearance="outline" class="w-100">
                <textarea
                  rows="5"
                  matInput
                  placeholder="Hi, Do you have a moment to talk Deo ?"
                ></textarea>
                <mat-icon matPrefix class="op-5">
                  <i-tabler name="message-2" class="icon-20 d-flex"></i-tabler>
                </mat-icon>
              </mat-form-field>
            </div>
          </div>
          <div class="row justify-content-end">
            <div class="col-sm-8">
              <button mat-flat-button>Send</button>
            </div>
          </div>
        </form>
`;

export const FORM_SEPARATOR_HTML_SNIPPET = `    <mat-card>
          <mat-card-content>
            <h4 class="f-s-16 f-w-600 m-b-16">Account Details</h4>

            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Username
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Email</mat-label
                >
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="john.deo" type="email" />
                  <span matTextSuffix>&#64;exmaple.com</span>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Password
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [type]="hide ? 'password' : 'text'" />
                  <button
                    mat-icon-button
                    matSuffix
                    (click)="hide = !hide"
                    [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="hide"
                  >
                    <mat-icon class="op-5">{{
                      hide ? "visibility_off" : "visibility"
                    }}</mat-icon>
                  </button>
                </mat-form-field>
              </div>
            </div>
          </mat-card-content>
          <mat-card-content class="b-t-1">
            <h4 class="f-s-16 f-w-600 m-b-16">Personal Info</h4>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Country
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <mat-select value="0">
                    <mat-option value="0"></mat-option>
                    <mat-option value="1">India</mat-option>
                    <mat-option value="2">Africa</mat-option>
                    <mat-option value="3">United Kingdom</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Birth Date
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [matDatepicker]="birthpicker" />
                  <mat-datepicker-toggle
                    matIconSuffix
                    [for]="birthpicker"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #birthpicker></mat-datepicker>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 d-flex align-items-center">
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Phone no
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4567 123" />
                </mat-form-field>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-sm-8">
                <button mat-flat-button>Submit</button>
                <button mat-flat-button class="bg-error text-white m-l-8">
                  Cancel
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
`;

export const FORM_LABEL_ALIGN_HTML_SNIPPET = `    <mat-card>
          <mat-card-content>
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Account Details</h4>

            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Username
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Email</mat-label
                >
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="john.deo" type="email" />
                  <span matTextSuffix>&#64;exmaple.com</span>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Password
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [type]="alignhide ? 'password' : 'text'" />
                  <button
                    mat-icon-button
                    matSuffix
                    (click)="alignhide = !alignhide"
                    [attr.aria-label]="'Hide password'"
                    [attr.aria-pressed]="alignhide"
                  >
                    <mat-icon class="op-5">{{
                      alignhide ? "visibility_off" : "visibility"
                    }}</mat-icon>
                  </button>
                </mat-form-field>
              </div>
            </div>
          </mat-card-content>
          <mat-card-content class="b-t-1">
            <h4 class="f-s-16 m-0 f-w-600 m-b-16">Personal Info</h4>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Country
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <mat-select value="0">
                    <mat-option value="0"></mat-option>
                    <mat-option value="1">India</mat-option>
                    <mat-option value="2">Africa</mat-option>
                    <mat-option value="3">United Kingdom</mat-option>
                  </mat-select>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Birth Date
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput [matDatepicker]="birthpicker2" />
                  <mat-datepicker-toggle
                    matIconSuffix
                    [for]="birthpicker2"
                  ></mat-datepicker-toggle>
                  <mat-datepicker #birthpicker2></mat-datepicker>
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Phone no
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4567 123" />
                </mat-form-field>
              </div>
            </div>
            <div class="row justify-content-end">
              <div class="col-sm-8">
                <button mat-flat-button>Submit</button>
                <button mat-flat-button class="bg-error text-white m-l-8">
                  Cancel
                </button>
              </div>
            </div>
          </mat-card-content>
        </mat-card>
`;

export const COLLAPSE_FORM_HTML_SNIPPET = `    <mat-accordion>
      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 0"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Delivery Address
          </mat-panel-title>
        </mat-expansion-panel-header>

        <div class="row">
          <div class="col-lg-6 col-sm-6">
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Full Name
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="John Deo" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Address
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="150 Foot Ring Road" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >City
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="Jackson" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Address Type
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-radio-group aria-label="Select an option" class="m-t-8">
                  <mat-radio-button value="1" color="primary"
                    >Home (All day delivery)</mat-radio-button
                  >
                  <mat-radio-button value="2" color="primary"
                    >Office (Delivery between 10 AM - 5 PM)</mat-radio-button
                  >
                </mat-radio-group>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-6">
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Phone
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="123 4561 213" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Pincode
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="630012" />
                </mat-form-field>
              </div>
            </div>
            <div class="row">
              <div
                class="col-sm-4 d-flex align-items-center justify-content-end"
              >
                <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                  >Landmark
                </mat-label>
              </div>
              <div class="col-sm-8">
                <mat-form-field appearance="outline" class="w-100">
                  <input matInput placeholder="Nr. wall street" />
                </mat-form-field>
              </div>
            </div>
          </div>
        </div>

        <mat-action-row>
          <button mat-flat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 1"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Delivery Options
          </mat-panel-title>
        </mat-expansion-panel-header>

        <mat-radio-group aria-label="Select an option" class="m-t-8">
          <mat-radio-button value="1" color="primary"
            >Standard 3-5 Days</mat-radio-button
          >
          <mat-radio-button value="2" color="primary">Express</mat-radio-button>
          <mat-radio-button value="3" color="primary"
            >Overnight</mat-radio-button
          >
        </mat-radio-group>

        <mat-action-row>
          <button
            mat-flat-button
            class="bg-error text-white"
            (click)="prevStep()"
          >
            Previous
          </button>
          <button mat-flat-button (click)="nextStep()">Next</button>
        </mat-action-row>
      </mat-expansion-panel>

      <mat-expansion-panel
        class="cardWithShadow"
        [expanded]="step === 2"
        (opened)="panelOpenState = true"
        (closed)="panelOpenState = false"
        hideToggle
      >
        <mat-expansion-panel-header>
          <mat-panel-title class="f-w-600 f-s-16"
            >Payment Method
          </mat-panel-title>
        </mat-expansion-panel-header>

        <mat-radio-group aria-label="Select an option" class="m-t-8">
          <mat-radio-button value="1" color="primary"
            >Credit/Debit/ATM Card
          </mat-radio-button>
          <mat-radio-button value="2" color="primary"
            >Cash on Delivery</mat-radio-button
          >
        </mat-radio-group>

        <div class="row m-t-12">
          <div class="col-sm-9">
            <!-- input -->
            <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
              >Card Number</mat-label
            >
            <mat-form-field appearance="outline" class="w-100" color="primary">
              <input matInput type="text" placeholder="123 200 540 620" />
            </mat-form-field>
            <div class="row m-t-12">
              <div class="col-sm-6">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block">Name</mat-label>
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                >
                  <input matInput type="text" placeholder="John Deo" />
                </mat-form-field>
              </div>
              <div class="col-sm-3">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
                  >Exp. Date</mat-label
                >
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                >
                  <input matInput type="text" placeholder="MM/YY" />
                </mat-form-field>
              </div>
              <div class="col-sm-3">
                <!-- input -->
                <mat-label class="f-s-14 f-w-600 m-b-8 d-block"
                  >CCV Code</mat-label
                >
                <mat-form-field
                  appearance="outline"
                  class="w-100"
                >
                  <input matInput type="text" placeholder="2501" />
                  <mat-icon matSuffix class="op-5">
                    <i-tabler
                      name="info-square-rounded"
                      class="icon-20 d-flex"
                    ></i-tabler>
                  </mat-icon>
                </mat-form-field>
              </div>
            </div>
          </div>
        </div>

        <mat-action-row>
          <button
            mat-flat-button
            class="bg-error text-white"
            (click)="prevStep()"
          >
            Previous
          </button>
          <button mat-flat-button (click)="nextStep()">End</button>
        </mat-action-row>
      </mat-expansion-panel>
    </mat-accordion>
`;

export const FORM_WITH_TABS_HTML_SNIPPET = `    <mat-card class="cardWithShadow">
      <mat-tab-group
        mat-stretch-tabs="false"
        mat-align-tabs="start"
        animationDuration="0ms"
      >
        <mat-tab label="Personal Info">
          <mat-card-content>
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >First Name
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="John" />
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Country
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <mat-select value="1">
                        <mat-option value="1"></mat-option>
                        <mat-option value="in">India</mat-option>
                        <mat-option value="fr">France</mat-option>
                        <mat-option value="af">Africa</mat-option>
                      </mat-select>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Birth Date
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput [matDatepicker]="birthpicker3" />
                      <mat-datepicker-toggle
                        matIconSuffix
                        [for]="birthpicker3"
                      ></mat-datepicker-toggle>
                      <mat-datepicker #birthpicker3></mat-datepicker>
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Last Name
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="Deo" />
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Language
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <mat-select value="en">
                        <mat-option value="en">English</mat-option>
                        <mat-option value="fr">French</mat-option>
                      </mat-select>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Phone no
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="123 4560 123" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-t-12 text-right">
              <button mat-flat-button>Submit</button>
              <button mat-flat-button class="bg-error text-white m-l-8">
                Cancel
              </button>
            </div>
          </mat-card-content>
        </mat-tab>
        <mat-tab label="Account Details">
          <mat-card-content>
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Username
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="John.Deo" />
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Password
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput [type]="hide2 ? 'password' : 'text'" />
                      <button
                        mat-icon-button
                        matSuffix
                        (click)="hide2 = !hide2"
                        [attr.aria-label]="'Hide password'"
                        [attr.aria-pressed]="hide2"
                      >
                        <mat-icon class="op-5">{{
                          hide2 ? "visibility_off" : "visibility"
                        }}</mat-icon>
                      </button>
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Email
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="john.deo" />
                      <span matTextSuffix>&#64;exmaple.com</span>
                    </mat-form-field>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Confirm
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput [type]="hide ? 'password' : 'text'" />
                      <button
                        mat-icon-button
                        matSuffix
                        (click)="conhide = !conhide"
                        [attr.aria-label]="'Hide password'"
                        [attr.aria-pressed]="conhide"
                      >
                        <mat-icon class="op-5">{{
                          conhide ? "visibility_off" : "visibility"
                        }}</mat-icon>
                      </button>
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-t-12 text-right">
              <button mat-flat-button>Submit</button>
              <button mat-flat-button class="bg-error text-white m-l-8">
                Cancel
              </button>
            </div>
          </mat-card-content>
        </mat-tab>
        <mat-tab label="Social Links">
          <mat-card-content>
            <div class="row">
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Twitter
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://twitter.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Facebook
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://facebook.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Google
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input
                        matInput
                        placeholder="https://plus.google.com/abc"
                      />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Linkedin
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://linkedin.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Instagram
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://instagram.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="row">
                  <div class="col-sm-3 d-flex align-items-center">
                    <mat-label class="f-s-14 f-w-600 d-block m-b-24"
                      >Quora
                    </mat-label>
                  </div>
                  <div class="col-sm-9">
                    <mat-form-field appearance="outline" class="w-100">
                      <input matInput placeholder="https://quora.com/abc" />
                    </mat-form-field>
                  </div>
                </div>
              </div>
            </div>
            <div class="m-t-12 text-right">
              <button mat-flat-button>Submit</button>
              <button mat-flat-button class="bg-error text-white m-l-8">
                Cancel
              </button>
            </div>
          </mat-card-content>
        </mat-tab>
      </mat-tab-group>
    </mat-card>
`;
