import * as classNames from 'classnames'
import * as React from 'react'
import { BaseExample, handleBooleanChange, handleStringChange } from '@blueprintjs/docs'
import {
  Button,
  Card,
  Classes,
  IconClasses,
  Intent,
  ITagProps,
  MenuItem,
  Switch
  } from '@blueprintjs/core'
import { Cell, Column, Table } from '@blueprintjs/table'
import { Film, TOP_100_FILMS } from './data'
import { Link } from 'react-router-dom'
import './Viewshow.css'
import {
  ISelectItemRendererProps,
  MultiSelect,
  Select,
  Suggest,
  TagInput,
  TimezoneDisplayFormat,
  TimezonePicker,
} from '@blueprintjs/labs'

const INTENTS = [Intent.NONE, Intent.PRIMARY, Intent.SUCCESS, Intent.DANGER, Intent.WARNING];

const NewSelect = Select.ofType<Film>()
const NewSuggest = Suggest.ofType<Film>()
const NewMulitSelect = MultiSelect.ofType<Film>()

interface StateStyles {
  disabled: boolean;
  values: string[];
  select: string;
  suggest: string;
  multi_select: Film[];
  time_zone: {
    date: Date;
    /*
     * TimezoneDisplayFormat || 時區呈現樣式
     * ( ABBREVIATION (縮略) / NAME (名稱) / OFFSET / COMPOSITE (複合) )
     */
    targetDisplayFormat: TimezoneDisplayFormat;
    timezone: string;
  }
}

class Viewshow extends React.PureComponent<any, StateStyles> {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false,
      values: ["apple", "banana", "cherry"],
      select: TOP_100_FILMS[0].title,
      suggest: TOP_100_FILMS[0].title,
      multi_select: [],
      time_zone: {
        date: new Date,
        targetDisplayFormat: TimezoneDisplayFormat.COMPOSITE,
        timezone: '',
      }
    }
  }

  itemPredicateA(query, item: Film, index: number) {
    return item.year.toString().includes(query) || item.title.includes(query)
  }
  itemRendererA(itemProps: ISelectItemRendererProps<Film>) {
    return (
      <MenuItem
        key={itemProps.item.rank}
        text={itemProps.item.title}
        label={itemProps.item.year.toString()}
        onClick={itemProps.handleClick}
      />
    )
  }

  itemPredicateB(query: string, item: Film, index: number) {
    return `${index + 1}. ${item.title.toLowerCase()} ${item.year}`.indexOf(query.toLowerCase()) >= 0;
  }
  itemRendererB({ handleClick, isActive, item: film }: ISelectItemRendererProps<Film>) {
    const classes = classNames({
      [Classes.ACTIVE]: isActive,
      [Classes.INTENT_PRIMARY]: isActive,
    });
    return (
      <MenuItem
        className={classes}
        label={film.year.toString()}
        key={film.rank}
        onClick={handleClick}
        text={`${film.rank}. ${film.title}`}
      />
    );
  }

  itemPredicateC(query: string, film: Film, index: number) {
    return `${index + 1}. ${film.title.toLowerCase()} ${film.year}`.indexOf(query.toLowerCase()) >= 0;
  }
  itemRendererC = ({ handleClick, isActive, item: film }: ISelectItemRendererProps<any>) => {
    const classes = classNames({
      [Classes.ACTIVE]: isActive,
      [Classes.INTENT_PRIMARY]: isActive,
    });

    return (
      <MenuItem
        className={classes}
        iconName={this.state.multi_select.indexOf(film) >= 0 ? "tick" : "blank"}
        key={film.rank}
        label={film.year.toString()}
        onClick={handleClick}
        text={`${film.rank}. ${film.title}`}
        shouldDismissPopover={false}
      />
    );
  };

  renderInputValue = (film: Film) => {
    return film.title;
  }

  render() {
    const renderCell = (rowIndex: number) => {
      return <Cell>{`$${(rowIndex * 10).toFixed(2)}`}</Cell>
    }
    const { disabled, values, select, suggest, multi_select, time_zone } = this.state
    return (
      <div className="viewshow-body">
        <Switch label="Set disabled" onChange={() => this.setState({ disabled: !disabled })} />
        {/* ========= Select ========= */}
        <div>
          <NewSelect
            disabled={disabled}
            items={TOP_100_FILMS}
            itemPredicate={this.itemPredicateA}
            itemRenderer={this.itemRendererA}
            noResults={<MenuItem disabled text="No results." />}
            onItemSelect={(val: Film) => this.setState({ select: val.title })}
          >
            <Button disabled={disabled} text={select} rightIconName="caret-down" />
          </NewSelect>
        </div>

        {/* ========= Suggest ========= */}
        <div>
          <NewSuggest
            inputValueRenderer={this.renderInputValue}
            items={TOP_100_FILMS}
            itemPredicate={this.itemPredicateB}
            itemRenderer={this.itemRendererB}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={(val: Film) => this.setState({ suggest: val.title })}
          />
        </div>

        {/* ========= Suggest ========= */}
        <div>
          <NewMulitSelect
            items={TOP_100_FILMS}
            itemPredicate={this.itemPredicateC}
            itemRenderer={this.itemRendererC}
            noResults={<MenuItem disabled={true} text="No results." />}
            onItemSelect={(val: any) => {
              (multi_select.indexOf(val) < 0)
                ? this.setState({ multi_select: [...multi_select, val] })
                : this.setState({ multi_select: multi_select.filter(film => film.title !== val.title) })
            }}
            tagInputProps={{
              tagProps: (_value: string, index: number): ITagProps => ({
                className: Classes.MINIMAL,
                intent: INTENTS[index % INTENTS.length],
              }),
              onRemove: (val: any): void => this.setState({ multi_select: multi_select.filter(film => film.title !== val) })
            }}
            tagRenderer={this.renderInputValue}
            selectedItems={multi_select}
          />
        </div>

        {/* ========= TagInput ========= */}
        <div>
          <TagInput
            onChange={(values: string[]) => this.setState({ values })}
            values={values}
          />
        </div>

        {/* ========= TimezonePicker ========= */}
        <div>
          <TimezonePicker
            date={time_zone.date}
            value={time_zone.timezone}
            onChange={(timezone: string) => {
              this.setState({ time_zone: { ...time_zone, timezone } });
            }}
            valueDisplayFormat={time_zone.targetDisplayFormat}
            showLocalTimezone={true}
            disabled={disabled}
          />
        </div>

        <div className="pt-card pt-elevation-2 pt-interactive">
          <h5><a href="#">カドです</a></h5>
          <p>This is a card example. Take a look and you will find fun soon.</p>
        </div>

        <Card interactive={true}>
          <h5><a href="#">Card heading</a></h5>
          <p>Card content</p>
          <Button>Submit</Button>
        </Card>

        <Table numRows={10}>
          <Column name="Dollars" renderCell={renderCell} />
        </Table>

        <p>
          <Link to="/">返回</Link>
        </p>
      </div>
    )
  }
}

export default Viewshow
