/**
 * --------------------------------------------------------------------------- *
 *
 * @Project: headless-chrome-test-mocha
 * @FileName: test-mocha-chai
 * @Dependence: --
 * @Description: --
 * @CreatedBy: liao.zhang
 * @CreateDate: 2017/7/9 22:47
 * @LastModifiedBy: liao.zhang
 * @LastModifiedDate: 2017/7/9 22:47
 *
 * --------------------------------------------------------------------------- *
 */

const chai = require('chai');

const chromeDriver = require('selenium-webdriver/chrome')

const webdriver = require('selenium-webdriver'),
    By = webdriver.By;

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chromeDriver.Options().addArguments(['headless']))
    .build();

describe('首页加载测试',function(){
    // 获取百度搜索按钮的 文本
    describe('按钮文本',function(){
        it('按钮文本必须等于',function(done){
            driver.get('https://www.baidu.com').then(function(){
                driver.findElement(By.id('su')).then((element) => {
                    return element.getAttribute('value')
                }).then((btnName) => {
                    console.log(btnName);
                    chai.expect(btnName).to.equal('百度一下');
                    done();
                });
            });
        })

    });

    // 获取百度首页 title
    describe('首页标题',function(){
        it('首页标题应该为',function(done){
            driver.get('https://www.baidu.com').then(function(){
                driver.getTitle().then((title) => {
                    console.log(title);
                    chai.expect(title).to.equal('百度一下，你就知道');
                    done();
                });
            });
        });
    });

    after(function(){
        driver.quit();
    })
});